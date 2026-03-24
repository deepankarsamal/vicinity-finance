export type UserRole = 'borrower' | 'lender' | 'admin'
export type PitchStatus = 'pending' | 'approved' | 'rejected' | 'funded' | 'closed'

export interface Profile {
  id: string
  email: string
  full_name: string
  role: UserRole
  city: string | null
  phone: string | null
  is_active: boolean
  created_at: string
}

export interface Pitch {
  id: string
  borrower_id: string
  title: string
  business_name: string
  business_type: string
  city: string
  loan_amount: number
  interest_rate: number
  tenure_months: number
  description: string
  monthly_revenue: number
  years_in_business: number
  amount_funded: number
  status: PitchStatus
  rejection_reason: string | null
  admin_notes: string | null
  submitted_at: string
  approved_at: string | null
  profiles?: Profile
}

export interface Investment {
  id: string
  lender_id: string
  pitch_id: string
  amount: number
  invested_at: string
  pitches?: Pitch
}

export interface Repayment {
  id: string
  pitch_id: string
  due_date: string
  amount_due: number
  is_paid: boolean
  paid_at: string | null
}
