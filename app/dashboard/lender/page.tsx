export default function LenderDashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-[28px] font-extrabold tracking-tight text-on-surface">Lender Dashboard</h2>
        <p className="text-on-surface-variant mt-1">Welcome back! Explore opportunities or check your portfolio.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <a
          href="/dashboard/lender/browse"
          className="bg-surface-container-lowest rounded-2xl p-8 shadow-arch hover:-translate-y-1 transition-transform flex items-center gap-6 group"
        >
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
            <span className="material-symbols-outlined text-3xl text-primary">explore</span>
          </div>
          <div>
            <h3 className="font-bold text-on-surface text-xl mb-1">Browse Pitches</h3>
            <p className="text-on-surface-variant text-sm">Discover verified businesses seeking community funding.</p>
          </div>
          <span className="material-symbols-outlined text-outline ml-auto group-hover:text-primary transition-colors">arrow_forward</span>
        </a>
        <a
          href="/dashboard/lender/portfolio"
          className="bg-surface-container-lowest rounded-2xl p-8 shadow-arch hover:-translate-y-1 transition-transform flex items-center gap-6 group"
        >
          <div className="w-16 h-16 bg-tertiary/10 rounded-2xl flex items-center justify-center">
            <span className="material-symbols-outlined text-3xl text-tertiary">account_balance_wallet</span>
          </div>
          <div>
            <h3 className="font-bold text-on-surface text-xl mb-1">My Portfolio</h3>
            <p className="text-on-surface-variant text-sm">Track your active investments and expected returns.</p>
          </div>
          <span className="material-symbols-outlined text-outline ml-auto group-hover:text-primary transition-colors">arrow_forward</span>
        </a>
      </div>
    </div>
  );
}
