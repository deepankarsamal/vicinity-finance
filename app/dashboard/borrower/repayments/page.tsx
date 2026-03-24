import { StatusBadge } from "@/components/ui/StatusBadge";

const mockRepayments = [
  {
    id: "1",
    pitchName: "Main St Bakery Expansion",
    icon: "store",
    dueDate: "Nov 02, 2025",
    amount: 125000,
    status: "scheduled" as const,
  },
  {
    id: "2",
    pitchName: "Web Design Studio Equipment",
    icon: "laptop_mac",
    dueDate: "Nov 15, 2025",
    amount: 84050,
    status: "scheduled" as const,
  },
];

const formatINR = (n: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(n);

export const metadata = {
  title: "Repayments — Vicinity Finance",
};

export default function RepaymentsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-[28px] font-extrabold tracking-tight text-on-surface">Repayments</h2>
        <p className="text-text-muted mt-1">Track and manage your upcoming loan repayments.</p>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Next Due", value: formatINR(125000), sub: "Nov 02, 2025", icon: "calendar_today", iconBg: "bg-primary/10", iconColor: "text-primary" },
          { label: "Total Upcoming", value: formatINR(209050), sub: "Next 30 days", icon: "payments", iconBg: "bg-amber-50", iconColor: "text-amber-600" },
          { label: "Paid This Year", value: formatINR(540000), sub: "12 repayments", icon: "check_circle", iconBg: "bg-emerald-50", iconColor: "text-emerald-600" },
        ].map((card) => (
          <div key={card.label} className="bg-surface-container-lowest rounded-2xl p-6 shadow-arch">
            <div className={`w-12 h-12 rounded-xl ${card.iconBg} flex items-center justify-center mb-4`}>
              <span className={`material-symbols-outlined ${card.iconColor}`}>{card.icon}</span>
            </div>
            <p className="text-on-surface opacity-60 text-xs font-semibold uppercase tracking-wider mb-1">{card.label}</p>
            <p className="text-2xl font-extrabold text-on-surface">{card.value}</p>
            <p className="text-xs text-text-muted mt-1">{card.sub}</p>
          </div>
        ))}
      </div>

      {/* Table */}
      <section className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-arch">
        <div className="p-6 border-b border-surface-container-low flex justify-between items-center">
          <h3 className="text-lg font-bold text-on-surface">Upcoming Repayments</h3>
          <div className="flex gap-2">
            <button className="p-2 bg-surface-container-low rounded-lg">
              <span className="material-symbols-outlined text-sm text-on-surface-variant">filter_list</span>
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface-container-low/50">
                <th className="px-6 py-4 text-[10px] font-bold text-outline uppercase tracking-widest">Pitch Name</th>
                <th className="px-6 py-4 text-[10px] font-bold text-outline uppercase tracking-widest">Due Date</th>
                <th className="px-6 py-4 text-[10px] font-bold text-outline uppercase tracking-widest">Amount</th>
                <th className="px-6 py-4 text-[10px] font-bold text-outline uppercase tracking-widest">Status</th>
                <th className="px-6 py-4" />
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container-low">
              {mockRepayments.map((r) => (
                <tr key={r.id} className="hover:bg-surface-container-low/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-surface-container-low flex items-center justify-center">
                        <span className="material-symbols-outlined text-sm text-outline">{r.icon}</span>
                      </div>
                      <span className="text-sm font-bold text-on-surface">{r.pitchName}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-on-surface-variant">{r.dueDate}</td>
                  <td className="px-6 py-4 text-sm font-extrabold text-on-surface">{formatINR(r.amount)}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wide">
                      Scheduled
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-primary text-xs font-bold hover:underline">Pay Now</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
