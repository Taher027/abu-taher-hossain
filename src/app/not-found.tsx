import { ArrowLeft, Mail } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#060b1a] px-5">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-accent/10 blur-3xl"
      />

      <div className="relative z-10 flex max-w-md flex-col items-center text-center">
        {/* 404 */}
        <h1 className="bg-linear-to-b from-sky-accent to-sky-accent/10 bg-clip-text text-8xl font-extrabold tracking-tight text-transparent sm:text-9xl">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-bold tracking-tight text-primary-heading sm:text-3xl">
          Page not found
        </h2>

        <p className="mt-3 text-[15px] leading-relaxed text-body-text">
          The page you are looking for doesn&apos;t exist, was moved, or the
          link is broken.
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-lg border-2 border-sky-accent px-5 py-2.5 text-sm font-semibold text-sky-accent transition-colors duration-300 hover:bg-sky-accent hover:text-[#060b1a]"
          >
            <ArrowLeft
              size={16}
              className="transition-transform duration-300 group-hover:-translate-x-0.5"
            />
            Back to home
          </Link>

          <Link
            href="/#contact"
            className="group inline-flex items-center gap-2 text-sm font-medium text-body-text transition-colors duration-300 hover:text-sky-accent"
          >
            <Mail size={16} strokeWidth={1.8} className="text-sky-accent" />
            Get in touch
          </Link>
        </div>
      </div>
    </main>
  );
}
