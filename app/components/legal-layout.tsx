import Image from "next/image";
import Link from "next/link";

export function LegalHeader({ backHref = "/support", backLabel = "Back to Support" }: { backHref?: string; backLabel?: string }) {
  return (
    <header className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur sticky top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-3" aria-label="ShapePal Home">
          <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-brand-dark ring-1 ring-zinc-600">
            <Image
              src="/logo.png"
              alt="ShapePal"
              width={40}
              height={40}
              className="object-contain p-1"
            />
          </div>
          <span className="text-xl font-semibold tracking-tight text-white">
            ShapePal
          </span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/support"
            className="text-sm font-medium text-zinc-400 transition hover:text-white"
          >
            Support
          </Link>
          <Link
            href="/terms"
            className="text-sm font-medium text-zinc-400 transition hover:text-white"
          >
            Terms
          </Link>
          <Link
            href="/privacy"
            className="text-sm font-medium text-zinc-400 transition hover:text-white"
          >
            Privacy
          </Link>
          <Link
            href={backHref}
            className="text-sm font-medium text-[#00EBC4] transition hover:opacity-80"
          >
            ← {backLabel}
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function LegalFooter() {
  return (
    <footer className="mt-auto border-t border-zinc-800 px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 pt-8 md:flex-row">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-8 w-8 overflow-hidden rounded-lg bg-brand-dark ring-1 ring-zinc-600">
              <Image
                src="/logo.png"
                alt=""
                width={32}
                height={32}
                className="object-contain p-0.5"
              />
            </div>
            <span className="font-semibold text-white">ShapePal</span>
          </Link>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <Link href="/support" className="text-zinc-400 transition hover:text-white">
              Support
            </Link>
            <Link href="/terms" className="text-zinc-400 transition hover:text-white">
              Terms
            </Link>
            <Link href="/privacy" className="text-zinc-400 transition hover:text-white">
              Privacy
            </Link>
            <a href="mailto:shapepalfit@gmail.com" className="text-zinc-400 transition hover:text-white">
              Contact
            </a>
          </div>
          <p className="text-sm text-zinc-500">
            Workouts · Plan · Calorie Counter · Fitness Transformation
          </p>
        </div>
      </div>
    </footer>
  );
}
