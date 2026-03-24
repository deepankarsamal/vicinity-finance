"use client";

import { useState } from "react";

const TENURE_OPTIONS = [6, 12, 18, 24, 36];

const formatINR = (n: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(n);

export default function SubmitPitchPage() {
  const [loanAmount, setLoanAmount] = useState(350000);
  const [interestRate, setInterestRate] = useState(14);
  const [tenureMonths, setTenureMonths] = useState(18);
  const [description, setDescription] = useState("");

  const monthlyEMI =
    loanAmount > 0 && tenureMonths > 0
      ? Math.round(
          (loanAmount * (1 + (interestRate / 100) * (tenureMonths / 12))) /
            tenureMonths
        )
      : 0;
  const totalRepayment = monthlyEMI * tenureMonths;

  return (
    <div>
      {/* Page header */}
      <div className="mb-8">
        <h1 className="text-[28px] font-bold text-on-surface">Submit a Loan Pitch</h1>
        <p className="text-text-muted text-lg mt-1">
          Tell lenders about your business and why you need funding.
        </p>
      </div>

      {/* Pending pitch alert */}
      <div className="mb-10 bg-amber-50 border-l-4 border-accent-orange rounded-xl p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span
            className="material-symbols-outlined text-accent-orange"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            warning
          </span>
          <p className="text-on-surface font-medium text-sm">
            You have a pitch under review. You can&apos;t submit another until it&apos;s resolved.
          </p>
        </div>
        <a href="#" className="text-accent-orange font-bold text-sm hover:underline flex items-center gap-1 whitespace-nowrap">
          View Existing Pitch{" "}
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </a>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left: Form */}
        <div className="w-full lg:w-3/5 bg-surface-container-lowest rounded-2xl shadow-arch p-8">
          <form className="space-y-12">
            {/* Section 1: Business Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-3 border-b border-outline-variant/30">
                <span className="material-symbols-outlined text-primary-container">domain</span>
                <h3 className="text-lg font-semibold text-on-surface">Business Details</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Business Name */}
                <div className="col-span-full space-y-2">
                  <label className="text-sm font-semibold text-on-surface-variant">Business Name</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-xl">store</span>
                    <input
                      id="business_name"
                      type="text"
                      placeholder="Legal business name"
                      className="w-full pl-12 pr-4 h-11 bg-surface-container-low border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 text-on-surface font-medium placeholder:text-outline text-sm"
                    />
                  </div>
                </div>
                {/* Business Type */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-on-surface-variant">Business Type</label>
                  <select
                    id="business_type"
                    className="w-full px-4 h-11 bg-surface-container-low border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 text-on-surface font-medium appearance-none text-sm"
                  >
                    <option>Retail</option>
                    <option>Food &amp; Beverage</option>
                    <option>Manufacturing</option>
                    <option>Services</option>
                    <option>Agriculture</option>
                    <option>Technology</option>
                    <option>Other</option>
                  </select>
                </div>
                {/* City */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-on-surface-variant">City</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-xl">location_on</span>
                    <input
                      id="city"
                      type="text"
                      placeholder="Location"
                      className="w-full pl-12 pr-4 h-11 bg-surface-container-low border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 text-on-surface font-medium placeholder:text-outline text-sm"
                    />
                  </div>
                </div>
                {/* Years in Business */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-on-surface-variant">Years in Business</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-xl">schedule</span>
                    <input
                      id="years_in_business"
                      type="number"
                      min="0.5"
                      step="0.5"
                      placeholder="e.g. 2.5"
                      className="w-full pl-12 pr-4 h-11 bg-surface-container-low border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 text-on-surface font-medium placeholder:text-outline text-sm"
                    />
                  </div>
                </div>
                {/* Monthly Revenue */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-on-surface-variant">Monthly Revenue (₹)</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-bold text-sm">₹</span>
                    <input
                      id="monthly_revenue"
                      type="number"
                      placeholder="Monthly Avg"
                      className="w-full pl-8 pr-4 h-11 bg-surface-container-low border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 text-on-surface font-bold placeholder:text-outline text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Loan Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-3 border-b border-outline-variant/30">
                <span className="material-symbols-outlined text-tertiary">currency_rupee</span>
                <h3 className="text-lg font-semibold text-on-surface">Loan Details</h3>
              </div>
              <div className="space-y-6">
                {/* Loan Title */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-on-surface-variant">Loan Title</label>
                  <input
                    id="title"
                    type="text"
                    placeholder="e.g. Expanding my bakery to a second location"
                    className="w-full px-4 h-11 bg-surface-container-low border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 text-on-surface font-medium placeholder:text-outline text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Loan Amount */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-on-surface-variant">Loan Amount</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-bold">₹</span>
                      <input
                        id="loan_amount"
                        type="number"
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(Number(e.target.value))}
                        placeholder="3,50,000"
                        className="w-full pl-8 pr-4 h-11 bg-surface-container-low border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 text-on-surface font-bold text-lg placeholder:text-outline"
                      />
                    </div>
                    <p className="text-[11px] text-text-muted">Min ₹10,000 · Max ₹50,00,000</p>
                  </div>

                  {/* Interest Rate Slider */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-semibold text-on-surface-variant">Interest Rate</label>
                      <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded">
                        {interestRate}% p.a.
                      </span>
                    </div>
                    <input
                      id="interest_rate"
                      type="range"
                      min={8}
                      max={24}
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="w-full h-1.5 bg-surface-container-high rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                  </div>
                </div>

                {/* Tenure selector */}
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-on-surface-variant">Select Tenure</label>
                  <div className="flex flex-wrap gap-3">
                    {TENURE_OPTIONS.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTenureMonths(t)}
                        className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                          tenureMonths === t
                            ? "bg-primary-container text-white shadow-md ring-2 ring-primary/20"
                            : "border border-outline-variant/50 text-on-surface-variant hover:border-primary"
                        }`}
                      >
                        {t}M
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Your Pitch */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-3 border-b border-outline-variant/30">
                <span className="material-symbols-outlined text-secondary">description</span>
                <h3 className="text-lg font-semibold text-on-surface">Your Pitch</h3>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-on-surface-variant">Description</label>
                <div className="relative">
                  <textarea
                    id="description"
                    rows={6}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    maxLength={2000}
                    placeholder="Describe your business, why you need the funds, and how you'll repay..."
                    className="w-full p-4 bg-surface-container-low border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 text-on-surface leading-relaxed resize-none text-sm"
                  />
                  <div className="absolute bottom-3 right-4 text-[12px] text-text-muted font-medium">
                    {description.length} / 2000
                  </div>
                </div>
              </div>
            </div>

            {/* Submit */}
            <button
              id="submit-pitch-btn"
              type="submit"
              className="w-full h-[52px] bg-gradient-to-r from-primary to-primary-container text-white font-bold text-lg rounded-[10px] shadow-lg shadow-primary/20 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 group"
            >
              Submit Pitch for Review
              <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">
                arrow_right_alt
              </span>
            </button>
          </form>
        </div>

        {/* Right: Sticky summary */}
        <aside className="w-full lg:w-2/5 sticky top-24 space-y-6">
          {/* Summary card */}
          <div className="bg-surface-container-lowest rounded-2xl shadow-arch overflow-hidden">
            <div className="p-6 border-b border-surface-container-low flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">calculate</span>
              <h3 className="text-base font-semibold text-on-surface">Your Pitch Summary</h3>
            </div>
            <div className="p-6 space-y-4">
              {[
                { label: "Loan Amount", value: formatINR(loanAmount) },
                { label: "Interest Rate", value: `${interestRate}% p.a.` },
                { label: "Tenure", value: `${tenureMonths} months` },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between py-2 border-b border-surface-container-low last:border-0">
                  <span className="text-text-muted text-sm font-medium">{label}</span>
                  <span className="text-on-surface font-bold">{value}</span>
                </div>
              ))}

              {/* Calculated Box */}
              <div className="bg-blue-50 rounded-xl p-5 mt-4 space-y-4">
                <div>
                  <p className="text-primary text-[13px] font-bold uppercase tracking-wider mb-1">
                    Estimated Monthly EMI
                  </p>
                  <p className="text-primary text-3xl font-extrabold tracking-tight">
                    {formatINR(monthlyEMI)}
                  </p>
                </div>
                <hr className="border-blue-200/50" />
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-primary/80 font-semibold text-sm">
                    <span>Total Repayment:</span>
                    <span>{formatINR(totalRepayment)}</span>
                  </div>
                  <div className="flex justify-between items-center text-accent font-bold text-xs uppercase tracking-tight">
                    <span>Lender Returns:</span>
                    <span className="flex items-center gap-1">
                      {interestRate}% p.a. annualized{" "}
                      <span className="material-symbols-outlined text-xs">trending_up</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="flex gap-3 items-start p-4 bg-surface-container-low rounded-xl mt-4">
                <span className="material-symbols-outlined text-outline text-lg">info</span>
                <p className="text-text-muted text-[12px] leading-relaxed">
                  Your pitch will be reviewed within 2–3 business days before going live for our lenders to see.
                </p>
              </div>
            </div>
          </div>

          {/* Upgrade card */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-inverse-surface to-[#1e293b] text-white relative overflow-hidden group">
            <div className="relative z-10">
              <h4 className="font-bold text-lg mb-2">Need a higher limit?</h4>
              <p className="text-blue-100/70 text-sm leading-snug mb-4">
                Upload your GST returns and Bank Statements to unlock up to ₹50L in funding.
              </p>
              <button className="text-xs font-bold uppercase tracking-widest text-white border-b border-blue-400 pb-1 hover:text-blue-300 transition-colors">
                Improve Credit Profile →
              </button>
            </div>
            <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-9xl opacity-5 text-white group-hover:scale-110 transition-transform">
              verified_user
            </span>
          </div>
        </aside>
      </div>
    </div>
  );
}
