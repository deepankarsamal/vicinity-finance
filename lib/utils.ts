import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount)
}

export function formatDate(dateStr: string): string {
  return new Intl.DateTimeFormat('en-IN', {
    day: 'numeric', month: 'short', year: 'numeric'
  }).format(new Date(dateStr))
}

export function calcFundingPercent(funded: number, total: number): number {
  return Math.min(Math.round((funded / total) * 100), 100)
}

export function calcExpectedReturn(amount: number, rate: number, months: number): number {
  return amount * (1 + (rate / 100) * (months / 12))
}
