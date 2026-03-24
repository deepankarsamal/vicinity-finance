interface FundingProgressProps {
  funded: number;
  total: number;
  showLabels?: boolean;
  className?: string;
}

export function FundingProgress({
  funded,
  total,
  showLabels = true,
  className = "",
}: FundingProgressProps) {
  const percent = Math.min(Math.round((funded / total) * 100), 100);

  const formatINR = (n: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(n);

  return (
    <div className={className}>
      {showLabels && (
        <div className="flex justify-between items-end mb-2">
          <span className="text-xs font-bold text-on-surface">{percent}% funded</span>
          <span className="text-xs font-medium text-on-surface opacity-60">
            {formatINR(funded)} raised
          </span>
        </div>
      )}
      <div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
