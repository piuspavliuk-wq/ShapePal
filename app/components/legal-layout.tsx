import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "./MobileMenu";

export function LegalHeader({ backHref = "/support", backLabel = "Back to Support" }: { backHref?: string; backLabel?: string }) {
  const legalNavLinks = [
    { href: "/", label: "Головна" },
    { href: "/support", label: "Support" },
    { href: "/terms", label: "Terms" },
    { href: "/privacy", label: "Privacy" },
    { href: backHref, label: backLabel },
  ];

  return (
    <header
      className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur sticky top-0 z-50"
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 min-h-[44px] md:py-4">
        <Link href="/" className="flex items-center gap-2 min-h-[44px] shrink-0" aria-label="ShapePal Home">
          <span className="text-xl font-semibold tracking-tight text-white">
            Shape
          </span>
          <Image
            src="/img/logo.png"
            alt="Pal"
            width={40}
            height={40}
            className="rounded-lg"
          />
        </Link>
        <nav className="hidden md:flex md:items-center md:gap-6" aria-label="Legal navigation">
          <Link
            href="/support"
            className="text-sm font-medium text-zinc-400 transition hover:text-white py-2 min-h-[44px] flex items-center"
          >
            Support
          </Link>
          <Link
            href="/terms"
            className="text-sm font-medium text-zinc-400 transition hover:text-white py-2 min-h-[44px] flex items-center"
          >
            Terms
          </Link>
          <Link
            href="/privacy"
            className="text-sm font-medium text-zinc-400 transition hover:text-white py-2 min-h-[44px] flex items-center"
          >
            Privacy
          </Link>
          <Link
            href={backHref}
            className="text-sm font-medium text-[#00EBC4] transition hover:opacity-80 py-2 min-h-[44px] flex items-center"
          >
            ← {backLabel}
          </Link>
        </nav>
        <MobileMenu links={legalNavLinks} />
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
            <span className="font-semibold text-white">Shape</span>
            <Image
              src="/img/logo.png"
              alt="Pal"
              width={32}
              height={32}
              className="rounded-lg"
            />
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
