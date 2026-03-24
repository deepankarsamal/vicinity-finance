import { PitchStatus } from "@/types";

interface StatusBadgeProps {
  status: PitchStatus;
  className?: string;
}

const statusConfig: Record<PitchStatus, { label: string; className: string }> = {
  pending: {
    label: "Pending",
    className: "bg-amber-100 text-amber-800",
  },
  approved: {
    label: "Approved",
    className: "bg-emerald-100 text-emerald-700",
  },
  rejected: {
    label: "Rejected",
    className: "bg-red-100 text-red-700",
  },
  funded: {
    label: "Funded",
    className: "bg-blue-100 text-blue-700",
  },
  closed: {
    label: "Closed",
    className: "bg-slate-100 text-slate-600",
  },
};

export function StatusBadge({ status, className = "" }: StatusBadgeProps) {
  const config = statusConfig[status];
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${config.className} ${className}`}
    >
      {config.label}
    </span>
  );
}
