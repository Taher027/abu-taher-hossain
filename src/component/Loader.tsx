export default function Loading() {
  return (
    <output
      aria-label="Loading"
      className="flex size-full flex-col items-center justify-center gap-8 bg-[#060b1a]"
    >
      {/* Spinner + initials */}
      <div className="relative flex h-24 w-24 items-center justify-center">
        <div
          aria-hidden="true"
          className="absolute inset-0 animate-pulse rounded-full bg-sky-accent/10 blur-xl"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-full border-2 border-sky-accent/15"
        />
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
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-sky-accent">
          Abu Taher Hossain
        </p>

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
