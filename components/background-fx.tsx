export function BackgroundFX() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid" />
      <div
        className="aurora-blob h-[520px] w-[520px] -left-32 -top-32"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklch, var(--brand-1) 60%, transparent) 0%, transparent 70%)",
          animationDelay: "0s",
        }}
      />
      <div
        className="aurora-blob h-[480px] w-[480px] right-[-160px] top-40"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklch, var(--brand-2) 55%, transparent) 0%, transparent 70%)",
          animationDelay: "-6s",
        }}
      />
      <div
        className="aurora-blob h-[420px] w-[420px] left-1/3 top-[680px]"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklch, var(--brand-3) 50%, transparent) 0%, transparent 70%)",
          animationDelay: "-12s",
        }}
      />
      <div className="noise" />
    </div>
  );
}
