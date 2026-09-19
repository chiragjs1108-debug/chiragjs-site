type ComparisonRow = {
  label: string;
  left: string;
  right: string;
};

type ComparisonTableProps = {
  leftHeader: string;
  rightHeader: string;
  rows: ComparisonRow[];
};

export function ComparisonTable({ leftHeader, rightHeader, rows }: ComparisonTableProps) {
  return (
    <div className="mt-10 flex flex-col divide-y divide-border overflow-hidden rounded-card border border-border">
      <div className="hidden grid-cols-[1fr_1.4fr_1.4fr] gap-6 bg-surface-2 px-6 py-4 md:grid">
        <span />
        <span className="font-mono text-[13px] uppercase tracking-[0.03em] text-text-3">{leftHeader}</span>
        <span className="font-mono text-[13px] uppercase tracking-[0.03em] text-lime">{rightHeader}</span>
      </div>

      {rows.map((row) => (
        <div
          key={row.label}
          className="grid gap-4 bg-surface px-6 py-6 md:grid-cols-[1fr_1.4fr_1.4fr] md:items-start md:gap-6"
        >
          <p className="font-mono text-[13px] text-text-3 md:pt-0.5">{row.label}</p>
          <div className="md:hidden">
            <p className="font-mono text-[12px] uppercase tracking-[0.03em] text-text-3">{leftHeader}</p>
            <p className="mt-1.5 text-[16px] leading-[1.65] text-text-2">{row.left}</p>
          </div>
          <p className="hidden text-[16px] leading-[1.65] text-text-2 md:block">{row.left}</p>
          <div className="border-l-2 border-lime pl-4 md:hidden">
            <p className="font-mono text-[12px] uppercase tracking-[0.03em] text-lime">{rightHeader}</p>
            <p className="mt-1.5 text-[16px] leading-[1.65] text-text">{row.right}</p>
          </div>
          <p className="hidden border-l-2 border-lime pl-4 text-[16px] leading-[1.65] text-text md:block">
            {row.right}
          </p>
        </div>
      ))}
    </div>
  );
}
