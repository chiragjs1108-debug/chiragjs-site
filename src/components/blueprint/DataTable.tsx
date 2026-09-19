type Column = {
  key: string;
  header: string;
};

type DataTableProps = {
  columns: Column[];
  rows: Record<string, string>[];
  className?: string;
};

export function DataTable({ columns, rows, className = "" }: DataTableProps) {
  return (
    <div className={`mt-8 ${className}`.trim()}>
      <table className="hidden w-full border-collapse text-left md:table">
        <thead>
          <tr className="border-b border-border">
            {columns.map((col) => (
              <th
                key={col.key}
                className="py-3 pr-6 font-mono text-[13px] font-medium uppercase tracking-[0.02em] text-text-3"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-border">
              {columns.map((col) => (
                <td key={col.key} className="py-4 pr-6 align-top text-[15px] leading-[1.65] text-text-2">
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex flex-col gap-4 md:hidden">
        {rows.map((row, i) => (
          <div key={i} className="rounded-card border border-border bg-surface p-5">
            {columns.map((col) => (
              <div key={col.key} className="mb-3 last:mb-0">
                <p className="font-mono text-[11px] uppercase tracking-[0.02em] text-text-3">{col.header}</p>
                <p className="mt-1 text-[15px] leading-[1.65] text-text-2">{row[col.key]}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
