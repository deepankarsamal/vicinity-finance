import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabase/server';

async function verifyRecaptcha(token: string): Promise<boolean> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/recaptcha`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token }),
  });
  const data = await res.json();
  return data.success === true;
}

export async function POST(req: NextRequest) {
  try {
    const { email, password, fullName, role, city, recaptchaToken } = await req.json();

    if (!email || !password || !fullName) {
      return NextResponse.json({ error: 'Name, email and password are required.' }, { status: 400 });
    }

    if (!recaptchaToken) {
      return NextResponse.json({ error: 'Please complete the reCAPTCHA.' }, { status: 400 });
    }

    const captchaValid = await verifyRecaptcha(recaptchaToken);
    if (!captchaValid) {
      return NextResponse.json({ error: 'reCAPTCHA verification failed. Please try again.' }, { status: 400 });
    }

    const supabase = await createServerClient();

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
          role: role ?? 'borrower',
          city: city ?? null,
        },
      },
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, user: data.user });
  } catch {
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
