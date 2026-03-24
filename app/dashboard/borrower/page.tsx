import Link from "next/link";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { StatCard } from "@/components/ui/StatCard";

const mockPitches = [
  {
    id: "1",
    title: "Sharma's Tiffin Service",
    status: "approved" as const,
    city: "Indore, MP",
    loanAmount: 350000,
    interestRate: 14,
    tenureMonths: 18,
    amountFunded: 252000,
    fundingPercent: 72,
    investorCount: 8,
    description: "Expanding my home kitchen to cater to corporate offices in Vijay Nagar...",
    imgAlt: "Indian small food business setup",
  },
  {
    id: "2",
    title: "Tech-Fix Solutions",
    status: "pending" as const,
    city: "Pune, MH",
    loanAmount: 250000,
    interestRate: 16,
    tenureMonths: 12,
    amountFunded: 75000,
    fundingPercent: 30,
    investorCount: 3,
    description: "Specializing in laptop and smartphone repairs, looking to stock premium spare parts...",
    imgAlt: "Electronic repair tools and workspace",
  },
];

const formatINR = (n: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(n);

export default function BorrowerDashboardPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <p className="text-on-surface opacity-60 font-medium mb-1">Good morning, Rohan 👋</p>
        <h2 className="font-extrabold text-[2rem] tracking-tighter text-on-surface leading-tight">
          My Dashboard
        </h2>
      </div>

      {/* Stats Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon="description"
          label="Total Pitches"
          value={3}
          badge="+1 this month"
          badgeColor="green"
          iconBgClass="bg-primary/10"
          iconColorClass="text-primary"
        />
        <StatCard
          icon="check_circle"
          label="Approved Pitches"
          value={1}
          iconBgClass="bg-emerald-50"
          iconColorClass="text-emerald-600"
        />
        <StatCard
          icon="currency_rupee"
          label="Total Applied"
          value="₹8,50,000"
          iconBgClass="bg-secondary/10"
          iconColorClass="text-secondary"
        />
        <StatCard
          icon="trending_up"
          label="Total Funded"
          value="₹3,20,000"
          badge="47% of applied"
          badgeColor="amber"
          iconBgClass="bg-tertiary-fixed-dim/20"
          iconColorClass="text-tertiary"
        />
      </section>

      {/* Pitches Section */}
      <section>
        <div className="flex justify-between items-end mb-8">
          <div>
            <h3 className="font-bold text-2xl tracking-tight text-on-surface">My Loan Pitches</h3>
            <p className="text-on-surface opacity-60 text-sm mt-1">Manage and track your funding progress</p>
          </div>
          <Link
            href="/dashboard/borrower/pitches/new"
            className="bg-primary text-white font-semibold py-2 px-6 rounded-xl hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20 flex items-center gap-2 text-sm"
          >
            Submit New Pitch
            <span className="material-symbols-outlined text-lg">add</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {mockPitches.map((pitch) => (
            <div
              key={pitch.id}
              className="bg-surface-container-lowest rounded-[20px] overflow-hidden shadow-arch flex flex-col"
            >
              <div className="p-8 pb-0">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <StatusBadge status={pitch.status} className="mb-2" />
                    <h4 className="font-bold text-xl text-on-surface">{pitch.title}</h4>
                    <div className="flex items-center gap-1 text-on-surface opacity-50 text-sm mt-1">
                      <span className="material-symbols-outlined text-sm">location_on</span>
                      <span>{pitch.city}</span>
                    </div>
                  </div>
                  <div className="w-16 h-16 rounded-2xl bg-surface-container overflow-hidden flex items-center justify-center">
                    <span className="material-symbols-outlined text-outline text-3xl">storefront</span>
                  </div>
                </div>

                <p className="text-on-surface opacity-70 text-sm line-clamp-2 mb-6">
                  {pitch.description}
                </p>

                {/* Mini stats */}
                <div className="grid grid-cols-3 gap-4 p-4 bg-surface-container-low rounded-2xl mb-6">
                  <div>
                    <p className="text-[10px] font-bold text-on-surface opacity-40 uppercase tracking-tighter">Loan Ask</p>
                    <p className="font-bold text-on-surface text-sm">{formatINR(pitch.loanAmount)}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-on-surface opacity-40 uppercase tracking-tighter">Interest</p>
                    <p className="font-bold text-on-surface text-sm">{pitch.interestRate}% p.a.</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-on-surface opacity-40 uppercase tracking-tighter">Tenure</p>
                    <p className="font-bold text-on-surface text-sm">{pitch.tenureMonths} Months</p>
                  </div>
                </div>

                {/* Progress */}
                <div className="mb-6">
                  <div className="flex justify-between items-end mb-2">
                    <p className="text-xs font-bold text-on-surface">{pitch.fundingPercent}% funded</p>
                    <p className="text-xs font-medium text-on-surface opacity-60">
                      {formatINR(pitch.amountFunded)} raised
                    </p>
                  </div>
                  <div className="h-3 w-full bg-surface-container-high rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-tertiary-container rounded-full"
                      style={{ width: `${pitch.fundingPercent}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-auto border-t border-on-surface/5 p-6 flex justify-between items-center bg-surface/50">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-on-surface opacity-40">group</span>
                  <span className="text-sm font-medium text-on-surface opacity-70">
                    {pitch.investorCount} investors
                  </span>
                </div>
                <Link
                  href={`/dashboard/borrower/pitches/${pitch.id}`}
                  className="text-primary font-bold text-sm hover:underline flex items-center gap-1 group"
                >
                  View Details
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Section */}
      <section className="grid grid-cols-12 gap-8">
        {/* Refer & Earn banner */}
        <div className="col-span-12 lg:col-span-8 bg-gradient-to-br from-[#131B2E] to-[#25304B] rounded-[24px] p-10 flex items-center justify-between text-white relative overflow-hidden group">
          <div className="relative z-10 max-w-md">
            <span className="inline-block bg-primary px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest mb-4">
              Refer &amp; Earn
            </span>
            <h3 className="text-3xl font-extrabold mb-4 leading-tight">
              Help fellow entrepreneurs grow and get rewarded.
            </h3>
            <p className="text-white/70 mb-8 font-medium">
              Earn up to ₹2,500 for every successful borrower you refer to Vicinity Finance.
            </p>
            <button className="bg-white text-on-surface px-8 py-3 rounded-xl font-bold hover:bg-surface-container-high transition-colors text-sm">
              Generate Referral Link
            </button>
          </div>
          <div className="absolute right-0 bottom-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
            <span className="material-symbols-outlined text-[12rem]">celebration</span>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="col-span-12 lg:col-span-4 bg-surface-container-low rounded-[24px] p-8 flex flex-col">
          <h4 className="font-bold text-on-surface mb-6">Recent Activity</h4>
          <div className="space-y-6 flex-1">
            {[
              { color: "bg-tertiary", text: "Investor committed ₹25,000", sub: "Sharma's Tiffin Service • 2h ago" },
              { color: "bg-primary", text: "New Pitch Published", sub: "Tech-Fix Solutions • Yesterday" },
              { color: "bg-secondary-container", text: "Profile Verified", sub: "Identity Verification • 2 days ago" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className={`w-2 h-2 rounded-full ${item.color} mt-2 flex-shrink-0`} />
                <div>
                  <p className="text-sm font-bold text-on-surface">{item.text}</p>
                  <p className="text-xs text-on-surface opacity-50">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-8 text-on-surface opacity-60 font-bold text-sm hover:opacity-100 transition-opacity flex items-center gap-2">
            View All Activity
            <span className="material-symbols-outlined text-sm">keyboard_arrow_down</span>
          </button>
        </div>
      </section>
    </div>
  );
}
