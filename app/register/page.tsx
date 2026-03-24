"use client";

import Link from "next/link";
import { useState, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import ReCAPTCHA from "react-google-recaptcha";

export default function RegisterPage() {
  const router = useRouter();
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("borrower");
  const [city, setCity] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleRecaptchaChange = useCallback((token: string | null) => {
    setRecaptchaToken(token);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!recaptchaToken) {
      setError("Please complete the reCAPTCHA verification.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, fullName, role, city, recaptchaToken }),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        setError(data.error ?? "Registration failed. Please try again.");
        recaptchaRef.current?.reset();
        setRecaptchaToken(null);
        return;
      }

      setSuccess(true);
      // Small delay so user sees the success state before redirect
      setTimeout(() => router.push("/dashboard"), 1500);
    } catch {
      setError("Network error. Please try again.");
      recaptchaRef.current?.reset();
      setRecaptchaToken(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-surface-container-low flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2.5 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
              <span
                className="material-symbols-outlined text-white"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                account_balance
              </span>
            </div>
            <span className="text-2xl font-extrabold text-on-surface tracking-tight font-serif">
              Vicinity Finance
            </span>
          </div>
          <h1 className="text-3xl font-extrabold text-on-surface tracking-tight">Create your account</h1>
          <p className="text-on-surface-variant mt-2 text-sm">Join the community lending network</p>
        </div>

        {/* Card */}
        <div className="bg-surface-container-lowest rounded-2xl shadow-arch p-8">
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Error Banner */}
            {error && (
              <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm font-medium">
                <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>error</span>
                {error}
              </div>
            )}

            {success && (
              <div className="flex items-center gap-3 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-xl px-4 py-3 text-sm font-medium">
                <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                Account created! Check your email to confirm, then redirecting…
              </div>
            )}

            {/* Full Name */}
            <div className="space-y-2">
              <label htmlFor="full_name" className="text-sm font-semibold text-on-surface-variant block">Full Name</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-xl">person</span>
                <input
                  id="full_name"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="Rohan Sharma"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full pl-12 pr-4 h-12 bg-surface-container-low border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 text-on-surface text-sm font-medium placeholder:text-outline"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-semibold text-on-surface-variant block">Email</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-xl">mail</span>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 h-12 bg-surface-container-low border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 text-on-surface text-sm font-medium placeholder:text-outline"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-semibold text-on-surface-variant block">Password</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-xl">lock</span>
                <input
                  id="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  minLength={8}
                  placeholder="Min. 8 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-4 h-12 bg-surface-container-low border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 text-on-surface text-sm font-medium placeholder:text-outline"
                />
              </div>
            </div>

            {/* Role + City */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="role" className="text-sm font-semibold text-on-surface-variant block">I am a…</label>
                <select
                  id="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full h-12 px-4 bg-surface-container-low border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 text-on-surface text-sm font-medium appearance-none"
                >
                  <option value="borrower">Borrower</option>
                  <option value="lender">Lender</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="city" className="text-sm font-semibold text-on-surface-variant block">City</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-lg">location_on</span>
                  <input
                    id="city"
                    type="text"
                    placeholder="e.g. Indore"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full pl-10 pr-3 h-12 bg-surface-container-low border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 text-on-surface text-sm font-medium placeholder:text-outline"
                  />
                </div>
              </div>
            </div>

            {/* reCAPTCHA */}
            <div className="flex justify-center">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                onChange={handleRecaptchaChange}
                theme="light"
              />
            </div>

            {/* Submit */}
            <button
              id="register-submit"
              type="submit"
              disabled={loading || !recaptchaToken}
              className="w-full h-12 bg-gradient-to-r from-primary to-primary-container text-white font-bold text-sm rounded-[10px] shadow-lg shadow-primary/20 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 group mt-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Creating account…
                </>
              ) : (
                <>
                  Create Account
                  <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
                </>
              )}
            </button>
          </form>

          <p className="text-center text-sm text-on-surface-variant mt-6">
            Already have an account?{" "}
            <Link href="/login" className="font-bold text-primary hover:underline">
              Sign in
            </Link>
          </p>
        </div>

        <div className="text-center mt-6">
          <Link href="/" className="text-xs text-outline hover:text-primary transition-colors font-medium">
            ← Back to Vicinity Finance
          </Link>
        </div>
      </div>
    </div>
  );
}
