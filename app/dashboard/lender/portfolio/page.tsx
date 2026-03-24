const MOCK_INVESTMENTS = [
  {
    id: "1",
    initials: "ST",
    colorClass: "bg-primary-container/10 text-primary",
    businessName: "Sharma's Tiffin",
    city: "Indore",
    invested: 30000,
    date: "12 Jan 2025",
    status: "approved",
    expectedReturn: 37800,
  },
  {
    id: "2",
    initials: "KT",
    colorClass: "bg-secondary-container/10 text-secondary",
    businessName: "Kumar Textiles",
    city: "Delhi",
    invested: 50000,
    date: "3 Feb 2025",
    status: "approved",
    expectedReturn: 66000,
  },
  {
    id: "3",
    initials: "PF",
    colorClass: "bg-tertiary-container/10 text-tertiary",
    businessName: "Patel Farm Fresh",
    city: "Mumbai",
    invested: 20000,
    date: "19 Feb 2025",
    status: "funded",
    expectedReturn: 22400,
  },
  {
    id: "4",
    initials: "MA",
    colorClass: "bg-error-container/10 text-on-error-container",
    businessName: "Mehta Auto Parts",
    city: "Indore",
    invested: 15000,
    date: "2 Mar 2025",
    status: "approved",
    expectedReturn: 23700,
  },
  {
    id: "5",
    initials: "NT",
    colorClass: "bg-primary-fixed-dim/30 text-primary",
    businessName: "Nair Tech Services",
    city: "Mumbai",
    invested: 25000,
    date: "15 Mar 2025",
    status: "approved",
    expectedReturn: 31250,
  },
];

const CHART_BARS = [
  { label: "Jan", height: "h-1/4", active: false },
  { label: "Feb", height: "h-2/5", active: false },
  { label: "Mar", height: "h-[80%]", active: true },
  { label: "Apr", height: "h-1/2", active: false },
  { label: "May", height: "h-3/5", active: false },
  { label: "Jun", height: "h-2/3", active: false },
];

const statusBadge: Record<string, string> = {
  approved: "bg-surface-container-high text-primary",
  funded: "bg-tertiary-container/10 text-tertiary",
};

const formatINR = (n: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(n);

export const metadata = {
  title: "My Portfolio — Vicinity Finance",
};

const totalInvested = MOCK_INVESTMENTS.reduce((s, i) => s + i.invested, 0);
const totalExpected = MOCK_INVESTMENTS.reduce((s, i) => s + i.expectedReturn, 0);

export default function PortfolioPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-[28px] font-extrabold text-on-surface tracking-tight">My Portfolio</h2>
        <p className="text-on-surface-variant mt-1">Track your investments and expected returns.</p>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-arch flex flex-col">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-primary">work</span>
          </div>
          <span className="text-sm font-semibold text-on-surface-variant mb-1">Total Invested</span>
          <span className="text-[32px] font-bold text-primary">{formatINR(totalInvested)}</span>
          <div className="mt-2 flex items-center gap-1 text-sm font-semibold text-tertiary">
            <span className="material-symbols-outlined text-xs">arrow_upward</span>
            +₹35,000 this month
          </div>
        </div>
        <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-arch flex flex-col">
          <div className="w-12 h-12 bg-tertiary/10 rounded-xl flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-tertiary">trending_up</span>
          </div>
          <span className="text-sm font-semibold text-on-surface-variant mb-1">Expected Returns</span>
          <span className="text-[32px] font-bold text-on-surface">{formatINR(totalExpected)}</span>
          <span className="mt-2 text-sm text-outline">At maturity</span>
        </div>
        <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-arch flex flex-col">
          <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-secondary">group</span>
          </div>
          <span className="text-sm font-semibold text-on-surface-variant mb-1">Pitches Backed</span>
          <span className="text-[32px] font-bold text-on-surface">{MOCK_INVESTMENTS.length}</span>
          <span className="mt-2 text-sm text-outline">Across 3 cities</span>
        </div>
      </div>

      {/* Investment Overview Chart */}
      <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-arch">
        <div className="flex justify-between items-center mb-10">
          <h3 className="text-lg font-bold text-on-surface">Investment Overview</h3>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-surface-container rounded-lg text-sm font-medium text-on-surface cursor-pointer">
            Last 6 months
            <span className="material-symbols-outlined text-sm">expand_more</span>
          </div>
        </div>
        <div className="flex items-end justify-between h-48 gap-4 px-4">
          {/* Y-axis */}
          <div className="flex flex-col justify-between h-full text-[10px] text-outline pr-4 font-bold">
            <span>₹50k</span>
            <span>₹25k</span>
            <span>₹0</span>
          </div>
          {CHART_BARS.map((bar) => (
            <div key={bar.label} className="flex-1 group relative flex flex-col items-center">
              {bar.active && (
                <div className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-opacity bg-inverse-surface text-inverse-on-surface text-[10px] px-3 py-1.5 rounded shadow-lg whitespace-nowrap z-10">
                  March: ₹40,000 invested
                </div>
              )}
              <div
                className={`w-full max-w-[40px] rounded-t-lg transition-all ${bar.height} ${
                  bar.active
                    ? "bg-primary group-hover:bg-primary"
                    : "bg-primary/20 group-hover:bg-primary"
                }`}
              />
              <span
                className={`text-xs font-semibold mt-3 ${
                  bar.active ? "font-bold text-on-surface" : "text-outline"
                }`}
              >
                {bar.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Investments Table */}
      <div className="bg-surface-container-lowest rounded-2xl shadow-arch overflow-hidden">
        <div className="p-6 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-on-surface">My Investments</h3>
          <button className="px-4 py-2 border border-outline-variant text-on-surface text-sm font-semibold rounded-lg hover:bg-surface-container transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">download</span>
            Export
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low/50">
                {["Business", "City", "Invested", "Date", "Status", "Expected Return", "Action"].map(
                  (h) => (
                    <th key={h} className="px-6 py-3 text-sm font-semibold text-text-muted">
                      {h}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container-low">
              {MOCK_INVESTMENTS.map((inv) => (
                <tr key={inv.id} className="hover:bg-surface-container-low/20 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${inv.colorClass}`}
                      >
                        {inv.initials}
                      </div>
                      <span className="font-medium text-on-surface">{inv.businessName}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-on-surface-variant text-sm">{inv.city}</td>
                  <td className="px-6 py-4 font-semibold text-on-surface text-sm">
                    {formatINR(inv.invested)}
                  </td>
                  <td className="px-6 py-4 text-on-surface-variant text-sm">{inv.date}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        statusBadge[inv.status]
                      }`}
                    >
                      {inv.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-bold text-on-surface text-sm">
                    {formatINR(inv.expectedReturn)}
                  </td>
                  <td className="px-6 py-4">
                    <a
                      href={`/dashboard/lender/invest/${inv.id}`}
                      className="text-primary font-semibold text-sm hover:underline"
                    >
                      View →
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
