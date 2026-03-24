import Link from "next/link";
import { FundingProgress } from "./FundingProgress";

interface PitchCardProps {
  id: string;
  businessName: string;
  businessType: string;
  city: string;
  description: string;
  loanAmount: number;
  interestRate: number;
  tenureMonths: number;
  amountFunded: number;
  investorCount?: number;
  status: "approved" | "funded";
  investHref?: string;
}

const categoryGradients: Record<string, string> = {
  "Food & Beverage": "from-blue-600 to-purple-700",
  Manufacturing: "from-indigo-700 to-purple-700",
  Agriculture: "from-green-700 to-teal-600",
  Technology: "from-blue-700 to-cyan-600",
  Automotive: "from-slate-700 to-blue-800",
  Hospitality: "from-orange-600 to-rose-700",
  Retail: "from-pink-600 to-purple-700",
  Services: "from-cyan-600 to-blue-700",
  Other: "from-blue-600 to-purple-700",
};

const formatINR = (n: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(n);

export function PitchCard({
  id,
  businessName,
  businessType,
  city,
  description,
  loanAmount,
  interestRate,
  tenureMonths,
  amountFunded,
  investorCount = 0,
  investHref,
}: PitchCardProps) {
  const percent = Math.min(Math.round((amountFunded / loanAmount) * 100), 100);
  const gradient = categoryGradients[businessType] ?? "from-blue-600 to-purple-700";
  const href = investHref ?? `/dashboard/lender/invest/${id}`;

  return (
    <div className="bg-surface-container-lowest rounded-[20px] shadow-arch hover:shadow-[0_12px_48px_rgba(19,27,46,0.12)] transition-all duration-300 overflow-hidden flex flex-col group cursor-pointer">
      {/* Gradient header */}
      <div className={`h-28 bg-gradient-to-br ${gradient} p-5 relative bg-mesh`}>
        <div className="flex justify-between items-start">
          <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full border border-white/10">
            {businessType}
          </span>
          <span className="bg-emerald-500 text-white text-[10px] font-black uppercase px-3 py-1.5 rounded-full flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
            Approved
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-[18px] font-bold text-on-surface leading-tight mb-1">
          {businessName}
        </h3>
        <div className="flex items-center gap-1.5 text-outline text-xs font-semibold mb-4">
          <span className="material-symbols-outlined text-sm">location_on</span>
          {city}
        </div>
        <p className="text-on-surface-variant text-sm leading-relaxed line-clamp-2 mb-6">
          {description}
        </p>

        {/* Stats grid */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div>
            <p className="text-[10px] font-black text-outline uppercase tracking-wider mb-1">
              Target
            </p>
            <p className="text-sm font-bold text-on-surface">{formatINR(loanAmount)}</p>
          </div>
          <div>
            <p className="text-[10px] font-black text-outline uppercase tracking-wider mb-1">
              Returns
            </p>
            <p className="text-sm font-bold text-tertiary">{interestRate}% p.a.</p>
          </div>
          <div>
            <p className="text-[10px] font-black text-outline uppercase tracking-wider mb-1">
              Tenure
            </p>
            <p className="text-sm font-bold text-on-surface">{tenureMonths} Months</p>
          </div>
        </div>

        {/* Funding progress */}
        <div className="space-y-2 mb-8 mt-auto">
          <div className="flex justify-between items-end">
            <span className="text-xs font-bold text-primary">{percent}% Funded</span>
            <span className="text-[10px] font-bold text-outline">
              {formatINR(amountFunded)} / {formatINR(loanAmount)}
            </span>
          </div>
          <div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-outline">
            <span className="material-symbols-outlined text-lg">group</span>
            <span className="text-xs font-bold">{investorCount} investors</span>
          </div>
          <Link
            href={href}
            className="bg-accent hover:bg-green-600 text-white px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-colors active:scale-95 shadow-md shadow-emerald-500/20"
          >
            Invest Now{" "}
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
