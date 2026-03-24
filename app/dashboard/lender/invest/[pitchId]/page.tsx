"use client";

import { useState } from "react";

const QUICK_AMOUNTS = [5000, 10000, 25000, 50000];

const formatINR = (n: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(n);

// Mock pitch data — in production this would be fetched server-side by pitchId
const PITCH = {
  id: "1",
  businessName: "Sharma's Tiffin Service",
  businessType: "Food & Beverage",
  city: "Indore, MP",
  loanAmount: 350000,
  interestRate: 14,
  tenureMonths: 18,
  amountFunded: 252000,
  investorCount: 8,
  description:
    "Sharma's Tiffin Service is a local Indore culinary success story providing healthy, homemade meals to corporate professionals and students. Seeking capital to upgrade to a cloud kitchen facility and automate packaging to double current daily capacity from 450 to 900 meals.",
  borrowerName: "Rohan Sharma",
  borrowerInitials: "RS",
  repaymentRate: "100%",
  pitchCount: 3,
};

export default function InvestPage() {
  const [investAmount, setInvestAmount] = useState(10000);
  const [showModal, setShowModal] = useState(false);

  const percent = Math.min(Math.round((PITCH.amountFunded / PITCH.loanAmount) * 100), 100);
  const estimatedReturn = Math.round(
    investAmount * (PITCH.interestRate / 100) * (PITCH.tenureMonths / 12)
  );
  const totalPayout = investAmount + estimatedReturn;

  return (
    <div>
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs font-medium text-outline mb-6">
        <a href="/dashboard/lender/browse" className="hover:text-primary cursor-pointer">
          Marketplace
        </a>
        <span className="material-symbols-outlined text-[14px]">chevron_right</span>
        <span className="text-on-surface">{PITCH.businessName}</span>
      </nav>

      {/* Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-[1.38fr_1fr] gap-8 items-start">
        {/* Left Column */}
        <div className="space-y-8">
          {/* Main pitch detail card */}
          <section className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-arch">
            {/* Gradient header */}
            <div
              className="h-40 p-8 flex flex-col justify-end relative"
              style={{ background: "linear-gradient(135deg, #004ac6 0%, #712ae2 100%)" }}
            >
              <div className="absolute top-6 left-8 flex gap-3">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] font-bold rounded-full uppercase tracking-wider">
                  {PITCH.businessType}
                </span>
                <span className="px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-bold rounded-full uppercase tracking-wider flex items-center gap-1">
                  <span
                    className="material-symbols-outlined text-xs"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    verified
                  </span>
                  Approved
                </span>
              </div>
              <h1 className="text-white text-3xl font-extrabold tracking-tight">{PITCH.businessName}</h1>
              <p className="text-white/80 text-sm font-medium mt-1 flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">location_on</span>
                {PITCH.city}
              </p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 divide-x divide-outline-variant/20 p-8 border-b border-outline-variant/10">
              <div className="pr-6">
                <p className="text-[11px] font-bold uppercase text-outline tracking-wider mb-1">Loan Amount</p>
                <p className="text-2xl font-extrabold text-on-surface tracking-tight">
                  {formatINR(PITCH.loanAmount)}
                </p>
              </div>
              <div className="px-6">
                <p className="text-[11px] font-bold uppercase text-outline tracking-wider mb-1">Annual Returns</p>
                <p className="text-2xl font-extrabold text-tertiary tracking-tight">{PITCH.interestRate}% p.a.</p>
              </div>
              <div className="pl-6">
                <p className="text-[11px] font-bold uppercase text-outline tracking-wider mb-1">Tenure</p>
                <p className="text-2xl font-extrabold text-on-surface tracking-tight">
                  {PITCH.tenureMonths} months
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="p-8 space-y-8">
              <div>
                <h3 className="text-lg font-extrabold mb-4">About This Business</h3>
                <div className="border-l-4 border-primary pl-6 py-1">
                  <p className="text-on-surface/70 leading-relaxed">{PITCH.description}</p>
                </div>
              </div>

              <div className="bg-tertiary/5 border border-tertiary/10 rounded-xl p-6">
                <h3 className="text-[11px] font-bold uppercase text-tertiary tracking-widest mb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg">trending_up</span>
                  Why Invest?
                </h3>
                <p className="text-tertiary font-bold text-lg leading-snug">
                  Invest{" "}
                  <span className="bg-tertiary/10 px-1 rounded">₹10,000</span> and earn{" "}
                  <span className="underline decoration-2">₹12,400</span> in {PITCH.tenureMonths} months through fixed
                  monthly repayments.
                </p>
              </div>
            </div>
          </section>

          {/* Borrower card */}
          <section className="bg-surface-container-low p-6 rounded-2xl flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary-fixed-dim flex items-center justify-center text-primary font-bold text-xl ring-4 ring-white shadow-sm">
                {PITCH.borrowerInitials}
              </div>
              <div>
                <h4 className="font-extrabold text-on-surface">{PITCH.borrowerName}</h4>
                <p className="text-xs text-outline font-medium">
                  {PITCH.pitchCount} pitches submitted · {PITCH.repaymentRate} Repayment Rate
                </p>
              </div>
            </div>
            <button className="text-primary text-xs font-bold uppercase tracking-widest hover:underline">
              View Profile
            </button>
          </section>
        </div>

        {/* Right Column — Sticky Investment Card */}
        <div className="sticky top-24">
          <div className="bg-surface-container-lowest rounded-2xl shadow-xl shadow-on-surface/5 overflow-hidden border border-outline-variant/10">
            <div className="p-8">
              <h2 className="text-xl font-extrabold tracking-tight flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-primary">bolt</span>
                Make Your Investment
              </h2>

              {/* Funding progress */}
              <div className="mb-8">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-2xl font-extrabold text-primary">
                    {formatINR(PITCH.amountFunded)}{" "}
                    <span className="text-sm font-medium text-outline">raised</span>
                  </span>
                  <span className="text-xs font-bold text-outline uppercase tracking-wider">
                    of {formatINR(PITCH.loanAmount)} target
                  </span>
                </div>
                <div className="w-full h-3 bg-surface-container-highest rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{
                      width: `${percent}%`,
                      background: "linear-gradient(90deg, #004ac6 0%, #10B981 100%)",
                    }}
                  />
                </div>
                <p className="text-[10px] text-right text-tertiary font-bold mt-2 uppercase tracking-widest">
                  {percent}% Funded • 4 days left
                </p>
              </div>

              {/* Quick select */}
              <div className="space-y-4 mb-6">
                <label className="text-[11px] font-bold uppercase text-outline tracking-wider block">
                  Quick Select
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {QUICK_AMOUNTS.map((amt) => (
                    <button
                      key={amt}
                      onClick={() => setInvestAmount(amt)}
                      className={`py-3 px-4 rounded-xl text-sm font-bold transition-all ${
                        investAmount === amt
                          ? "border-2 border-primary bg-primary/5 text-primary shadow-sm"
                          : "border border-outline-variant/30 text-on-surface hover:bg-surface-container-low"
                      }`}
                    >
                      {formatINR(amt)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom amount */}
              <div className="mb-6">
                <label className="text-[11px] font-bold uppercase text-outline tracking-wider mb-2 block">
                  Custom Amount
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-2xl text-on-surface">₹</span>
                  <input
                    type="number"
                    value={investAmount}
                    onChange={(e) => setInvestAmount(Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-4 bg-surface-container-lowest border-2 border-outline-variant/20 rounded-xl text-2xl font-extrabold focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none text-on-surface"
                  />
                </div>
                <p className="text-[10px] font-medium text-outline mt-2 italic">
                  * Minimum investment amount is ₹2,000
                </p>
              </div>

              {/* Live return preview */}
              <div className="bg-surface-container-low rounded-xl p-5 space-y-3 relative overflow-hidden mb-6">
                <div className="absolute right-0 top-0 h-full w-1 bg-primary/30" />
                <div className="flex justify-between text-xs font-medium text-on-surface/60">
                  <span>You invest:</span>
                  <span className="font-bold text-on-surface">{formatINR(investAmount)}</span>
                </div>
                <div className="flex justify-between text-xs font-medium text-on-surface/60">
                  <span>Estimated return:</span>
                  <span className="font-bold text-tertiary">+ {formatINR(estimatedReturn)}</span>
                </div>
                <div className="pt-3 border-t border-outline-variant/20 flex justify-between items-center">
                  <span className="text-sm font-bold text-on-surface">Total Payout:</span>
                  <span className="text-xl font-extrabold text-tertiary">{formatINR(totalPayout)}</span>
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={() => setShowModal(true)}
                className="w-full py-5 bg-accent hover:bg-green-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-tertiary/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                Confirm Investment
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <div className="flex items-center justify-center gap-2 text-outline mt-3">
                <span className="material-symbols-outlined text-sm">lock</span>
                <span className="text-[11px] font-bold uppercase tracking-widest">
                  Safe &amp; secure bank-grade encryption
                </span>
              </div>
            </div>
          </div>

          {/* Community context */}
          <div className="mt-6 flex items-center gap-3 px-6 py-4 bg-secondary-container/10 rounded-2xl border border-secondary-container/20">
            <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-white flex-shrink-0">
              <span className="material-symbols-outlined text-xl">group</span>
            </div>
            <div>
              <p className="text-[11px] font-bold text-on-secondary-fixed-variant leading-tight">
                30 neighbors also use this service
              </p>
              <p className="text-[10px] text-on-secondary-fixed-variant/60">
                High local demand in Indore central.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-on-surface/40 backdrop-blur-md">
          <div className="glass-card w-[480px] p-10 rounded-3xl shadow-2xl text-center border border-white/40">
            <div className="w-20 h-20 bg-tertiary-fixed rounded-full flex items-center justify-center mx-auto mb-6">
              <span
                className="material-symbols-outlined text-4xl text-on-tertiary-fixed"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check_circle
              </span>
            </div>
            <h2 className="text-3xl font-extrabold mb-2 tracking-tight text-on-surface">
              Investment Successful!
            </h2>
            <p className="text-on-surface/60 mb-8 px-4">
              Your investment of {formatINR(investAmount)} in {PITCH.businessName} has been processed.
              You&apos;ll start receiving returns next month.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="/dashboard/lender/portfolio"
                className="w-full py-4 bg-primary text-white rounded-xl font-bold text-center hover:bg-primary-dark transition-colors"
              >
                View Portfolio
              </a>
              <button
                onClick={() => setShowModal(false)}
                className="w-full py-4 text-primary font-bold hover:bg-primary/5 rounded-xl transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
