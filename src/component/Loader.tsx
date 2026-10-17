export default function Loading() {
  return (
    <output
      aria-label="Loading"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 bg-[#060b1a]"
    >
      {/* Spinner + initials */}
      <div className="relative flex h-24 w-24 items-center justify-center">
        {/* Soft glow */}
        <div
          aria-hidden="true"
          className="absolute inset-0 animate-pulse rounded-full bg-sky-accent/10 blur-xl"
        />

        {/* Static track */}
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-full border-2 border-sky-accent/15"
        />

        {/* Spinning arc */}
        <div
          aria-hidden="true"
          className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-sky-accent"
          style={{ animationDuration: "1s" }}
        />

        <span className="text-2xl font-bold tracking-tight text-primary-heading">
          AT
        </span>
      </div>

      {/* Text */}
      <div className="space-y-3 text-center">
        <p className="text-sm font-medium tracking-[0.25em] text-sky-accent uppercase">
          Abu Taher Hossain
        </p>

        {/* Bouncing dots */}
        <div
          className="flex items-center justify-center gap-1.5"
          aria-hidden="true"
        >
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-sky-accent [animation-delay:-0.3s]" />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-sky-accent [animation-delay:-0.15s]" />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-sky-accent" />
        </div>
      </div>

      <span className="sr-only">Loading portfolio…</span>
    </output>
  );
}
