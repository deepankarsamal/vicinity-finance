import { StatCard } from "@/components/ui/StatCard";
import { StatusBadge } from "@/components/ui/StatusBadge";

const PENDING = [
  {
    id: "1",
    initials: "SK",
    name: "Suresh Kumar",
    business: "Kumar Bakery & Snacks",
    amount: 450000,
    city: "Pune, MH",
    color: "from-primary to-secondary",
  },
  {
    id: "2",
    initials: "PM",
    name: "Priya Mehta",
    business: "Mehta Handicrafts",
    amount: 200000,
    city: "Ahmedabad, GJ",
    color: "from-secondary to-tertiary-container",
  },
  {
    id: "3",
    initials: "RG",
    name: "Ravi Gupta",
    business: "Green Cabs Fleet",
    amount: 1200000,
    city: "Indore, MP",
    color: "from-tertiary to-primary",
  },
];

const ACTIVITY = [
  { icon: "task_alt", color: "bg-emerald-100 text-emerald-700", text: "Kumar Textiles pitch approved", time: "3 minutes ago" },
  { icon: "person_add", color: "bg-primary/10 text-primary", text: "New lender registered: Sunita Patel", time: "27 minutes ago" },
  { icon: "do_not_disturb_on", color: "bg-red-100 text-red-700", text: "Mehta Real Estate pitch rejected", time: "1 hour ago" },
  { icon: "currency_rupee", color: "bg-amber-100 text-amber-700", text: "₹45,000 invested in Sharma's Tiffin", time: "2 hours ago" },
  { icon: "campaign", color: "bg-purple-100 text-purple-700", text: "New pitch submitted: Green Cabs Fleet", time: "3 hours ago" },
];

const formatINR = (n: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(n);

export default function AdminOverviewPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <p className="text-on-surface opacity-60 text-sm font-medium mb-1">Admin Panel</p>
        <h2 className="text-[28px] font-extrabold text-on-surface tracking-tight">Platform Overview</h2>
      </div>

      {/* Stats */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon="hourglass_empty"
          label="Pending Review"
          value={12}
          badge="3 urgent"
          badgeColor="amber"
          iconBgClass="bg-amber-50"
          iconColorClass="text-amber-600"
        />
        <StatCard
          icon="check_circle"
          label="Approved Pitches"
          value={46}
          badge="+4 this week"
          badgeColor="green"
          iconBgClass="bg-emerald-50"
          iconColorClass="text-emerald-600"
        />
        <StatCard
          icon="currency_rupee"
          label="Total Deployed"
          value="₹1.8 Cr"
          iconBgClass="bg-blue-50"
          iconColorClass="text-primary"
        />
        <StatCard
          icon="group"
          label="Total Users"
          value={215}
          badge="+12 this week"
          badgeColor="blue"
          iconBgClass="bg-secondary/10"
          iconColorClass="text-secondary"
        />
      </section>

      {/* Queue + Activity */}
      <section className="grid grid-cols-12 gap-8">
        {/* Pending Queue */}
        <div className="col-span-12 lg:col-span-7 bg-surface-container-lowest rounded-2xl shadow-arch overflow-hidden">
          <div className="px-8 py-6 border-b border-outline-variant/10 flex justify-between items-center">
            <h3 className="font-bold text-on-surface text-lg">Pending Review Queue</h3>
            <span className="px-3 py-1 bg-amber-100 text-amber-700 text-[10px] font-bold rounded-full uppercase tracking-wider">
              12 Pending
            </span>
          </div>
          <div className="divide-y divide-outline-variant/10">
            {PENDING.map((p) => (
              <div key={p.id} className="flex items-center gap-4 px-8 py-5 hover:bg-surface-container-low/30 transition-colors group">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center text-white font-bold flex-shrink-0`}>
                  {p.initials}
                </div>
                <div className="flex-1 overflow-hidden">
                  <p className="font-bold text-on-surface">{p.name}</p>
                  <p className="text-xs text-on-surface opacity-60">
                    {p.business} · {p.city}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-extrabold text-on-surface">{formatINR(p.amount)}</p>
                  <StatusBadge status="pending" className="mt-1" />
                </div>
                <a
                  href="/dashboard/admin/pitches"
                  className="ml-2 text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 whitespace-nowrap"
                >
                  Review
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            ))}
          </div>
          <div className="px-8 py-4 border-t border-outline-variant/10">
            <a href="/dashboard/admin/pitches" className="text-primary font-semibold text-sm hover:underline">
              View all pitches →
            </a>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="col-span-12 lg:col-span-5 bg-surface-container-lowest rounded-2xl shadow-arch p-8 flex flex-col">
          <h3 className="font-bold text-on-surface text-lg mb-6">Recent Activity</h3>
          <div className="space-y-6 flex-1">
            {ACTIVITY.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${item.color}`}>
                  <span className="material-symbols-outlined text-sm">{item.icon}</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-on-surface">{item.text}</p>
                  <p className="text-[11px] text-on-surface opacity-40">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
          <a href="#" className="mt-6 text-primary font-semibold text-sm hover:underline">
            View full audit log →
          </a>
        </div>
      </section>
    </div>
  );
}
