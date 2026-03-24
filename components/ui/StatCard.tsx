import React from "react";

interface StatCardProps {
  icon: string; // Material Symbol icon name
  label: string;
  value: string | number;
  badge?: string;
  badgeColor?: "green" | "amber" | "blue" | "slate";
  iconBgClass?: string;
  iconColorClass?: string;
}

const badgeColorMap: Record<string, string> = {
  green: "bg-emerald-50 text-emerald-700",
  amber: "bg-amber-50 text-amber-700",
  blue: "bg-blue-50 text-blue-700",
  slate: "bg-slate-50 text-slate-600",
};

export function StatCard({
  icon,
  label,
  value,
  badge,
  badgeColor = "green",
  iconBgClass = "bg-primary/10",
  iconColorClass = "text-primary",
}: StatCardProps) {
  return (
    <div className="bg-surface-container-lowest p-6 rounded-[16px] shadow-arch group hover:-translate-y-1 transition-transform duration-200">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 rounded-xl ${iconBgClass}`}>
          <span className={`material-symbols-outlined ${iconColorClass}`}>{icon}</span>
        </div>
        {badge && (
          <span className={`text-[0.7rem] font-bold px-2 py-1 rounded-full ${badgeColorMap[badgeColor]}`}>
            {badge}
          </span>
        )}
      </div>
      <p className="text-on-surface opacity-60 text-xs font-semibold tracking-wider uppercase mb-1">
        {label}
      </p>
      <p className="text-[2rem] font-extrabold text-on-surface leading-none">{value}</p>
    </div>
  );
}
