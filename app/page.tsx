import Link from "next/link";

const stats = [
  { label: "Total Deployed", value: "₹1.8 Cr+" },
  { label: "Active Borrowers", value: "120+" },
  { label: "Community Lenders", value: "95+" },
  { label: "Cities Served", value: "12+" },
];

const howItWorksBorrower = [
  {
    step: "1",
    icon: "edit_note",
    title: "Submit Your Pitch",
    desc: "Tell lenders about your business and funding needs.",
  },
  {
    step: "2",
    icon: "admin_panel_settings",
    title: "Admin Reviews",
    desc: "Our team verifies your application within 2–3 business days.",
  },
  {
    step: "3",
    icon: "payments",
    title: "Get Funded",
    desc: "Once approved, community lenders fund your pitch directly.",
  },
];

const howItWorksLender = [
  {
    step: "1",
    icon: "explore",
    title: "Browse Pitches",
    desc: "Discover verified local businesses seeking funding.",
  },
  {
    step: "2",
    icon: "currency_rupee",
    title: "Invest with Ease",
    desc: "Choose a business you believe in and invest any amount.",
  },
  {
    step: "3",
    icon: "trending_up",
    title: "Earn Returns",
    desc: "Receive fixed monthly repayments with interest.",
  },
];

const featuredPitches = [
  {
    name: "Sharma's Tiffin Service",
    type: "Food & Beverage",
    city: "Indore",
    amount: "₹3,50,000",
    rate: "14% p.a.",
    funded: "72%",
    gradient: "from-blue-600 to-purple-700",
  },
  {
    name: "Kumar Textiles",
    type: "Manufacturing",
    city: "Delhi",
    amount: "₹8,00,000",
    rate: "16% p.a.",
    funded: "45%",
    gradient: "from-indigo-700 to-purple-700",
  },
  {
    name: "Patel Farm Fresh",
    type: "Agriculture",
    city: "Mumbai",
    amount: "₹2,00,000",
    rate: "12% p.a.",
    funded: "88%",
    gradient: "from-green-700 to-teal-600",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-surface-bright font-serif">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-surface-bright/80 backdrop-blur-xl border-b border-outline-variant/10 px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-white text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              account_balance
            </span>
          </div>
          <span className="text-xl font-extrabold text-on-surface tracking-tight font-serif">Vicinity Finance</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-on-surface-variant">
          <a href="#how-it-works" className="hover:text-primary transition-colors">How It Works</a>
          <a href="#pitches" className="hover:text-primary transition-colors">Browse Pitches</a>
          <a href="#about" className="hover:text-primary transition-colors">About</a>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/login" className="text-sm font-bold text-on-surface hover:text-primary transition-colors px-4 py-2">
            Log In
          </Link>
          <Link
            href="/register"
            className="bg-primary hover:bg-primary-dark transition-colors text-white text-sm font-bold px-5 py-2.5 rounded-[10px] shadow-lg shadow-primary/20 font-sans"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-on-surface to-inverse-surface text-white px-8 py-24 text-center">
        <div className="absolute inset-0 bg-mesh opacity-30" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-block bg-primary text-white text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            Community-Powered Lending
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight mb-6">
            Fund Local Businesses.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-fixed-dim to-tertiary-fixed">
              Earn Real Returns.
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Vicinity Finance connects local entrepreneurs with community investors. Borrow to grow your business or lend to earn up to 18% annual returns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="bg-white text-on-surface hover:bg-slate-100 font-bold text-base px-8 py-4 rounded-xl transition-all shadow-xl hover:shadow-2xl"
            >
              Start Borrowing
            </Link>
            <Link
              href="/dashboard/lender/browse"
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 font-bold text-base px-8 py-4 rounded-xl transition-all"
            >
              Browse Pitches →
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="bg-surface-container-lowest px-8 py-10">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-extrabold text-primary">{s.value}</p>
              <p className="text-sm font-semibold text-on-surface-variant mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="px-8 py-20 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-on-surface tracking-tight mb-3">How It Works</h2>
          <p className="text-on-surface-variant text-lg">Simple steps for both borrowers and lenders.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Borrowers */}
          <div>
            <h3 className="text-xl font-bold text-on-surface mb-8 flex items-center gap-2">
              <span className="bg-primary/10 text-primary rounded-lg p-2 material-symbols-outlined">store</span>
              For Borrowers
            </h3>
            <div className="space-y-6">
              {howItWorksBorrower.map((step) => (
                <div key={step.step} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-primary text-white font-extrabold flex items-center justify-center text-sm flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <p className="font-bold text-on-surface mb-1">{step.title}</p>
                    <p className="text-sm text-on-surface-variant">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Lenders */}
          <div>
            <h3 className="text-xl font-bold text-on-surface mb-8 flex items-center gap-2">
              <span className="bg-accent/10 text-accent rounded-lg p-2 material-symbols-outlined">trending_up</span>
              For Lenders
            </h3>
            <div className="space-y-6">
              {howItWorksLender.map((step) => (
                <div key={step.step} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-accent text-white font-extrabold flex items-center justify-center text-sm flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <p className="font-bold text-on-surface mb-1">{step.title}</p>
                    <p className="text-sm text-on-surface-variant">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Pitches */}
      <section id="pitches" className="px-8 py-20 bg-surface-container-low">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-4xl font-extrabold text-on-surface tracking-tight mb-2">Featured Pitches</h2>
              <p className="text-on-surface-variant">Verified businesses seeking community funding right now.</p>
            </div>
            <Link href="/dashboard/lender/browse" className="text-sm font-bold text-primary hover:underline hidden md:block">
              View All →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredPitches.map((p) => (
              <div key={p.name} className="bg-surface-container-lowest rounded-[20px] overflow-hidden shadow-arch hover:-translate-y-1 transition-transform duration-200">
                <div className={`h-24 bg-gradient-to-br ${p.gradient} p-5 bg-mesh`}>
                  <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full border border-white/10">
                    {p.type}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-on-surface text-lg mb-1">{p.name}</h3>
                  <p className="text-outline text-xs flex items-center gap-1 mb-4">
                    <span className="material-symbols-outlined text-sm">location_on</span>
                    {p.city}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-5">
                    <div>
                      <p className="text-[10px] text-outline uppercase font-bold mb-0.5">Target</p>
                      <p className="font-bold text-on-surface text-sm">{p.amount}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-outline uppercase font-bold mb-0.5">Returns</p>
                      <p className="font-bold text-tertiary text-sm">{p.rate}</p>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-primary">{p.funded} Funded</span>
                    </div>
                    <div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                        style={{ width: p.funded }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="px-8 py-20 bg-gradient-to-br from-on-surface to-inverse-surface text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-20" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-4 tracking-tight">Ready to get started?</h2>
          <p className="text-white/70 mb-8">
            Join over 200 community members who are building wealth together.
          </p>
          <Link
            href="/register"
            className="bg-white text-on-surface font-bold px-10 py-4 rounded-xl hover:bg-slate-100 transition-colors shadow-xl text-base"
          >
            Create your free account
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-on-surface text-white/60 text-center py-8 text-sm">
        <p>© 2026 Vicinity Finance. All rights reserved. · Community Lending Platform</p>
      </footer>
    </div>
  );
}
