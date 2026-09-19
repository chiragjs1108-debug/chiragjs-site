type GridTextureProps = {
  className?: string;
};

export function GridTexture({ className = "" }: GridTextureProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 -z-10 text-text opacity-[0.04] ${className}`.trim()}
      style={{
        backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    />
  );
}
