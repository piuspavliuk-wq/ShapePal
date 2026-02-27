import Image from "next/image";
import Link from "next/link";
import { DownloadButtons } from "./components/DownloadButtons";
import { MobileMenu } from "./components/MobileMenu";
import { PageLoader } from "./components/PageLoader";
import { PhoneCarousel } from "./components/PhoneCarousel";

const HOME_NAV_LINKS = [
  { href: "#transformation", label: "Results" },
  { href: "/support", label: "Support" },
  { href: "/terms", label: "Terms" },
  { href: "/privacy", label: "Privacy" },
];

export default function Home() {
  return (
    <PageLoader>
      <>
      <header className="bg-zinc-900" style={{ paddingTop: "env(safe-area-inset-top)" }}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 min-h-[44px] md:py-4">
          <a href="/" className="flex items-center gap-2 min-h-[44px] shrink-0" aria-label="ShapePal Home">
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
          </a>
          <nav className="hidden gap-6 md:flex md:items-center" aria-label="Main navigation">
            <a
              href="#transformation"
              className="text-sm font-medium text-zinc-400 transition hover:text-white py-2"
            >
              Results
            </a>
            <Link href="/support" className="text-sm font-medium text-zinc-400 transition hover:text-white py-2">
              Support
            </Link>
            <Link href="/terms" className="text-sm font-medium text-zinc-400 transition hover:text-white py-2">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm font-medium text-zinc-400 transition hover:text-white py-2">
              Privacy
            </Link>
          </nav>
          <MobileMenu links={HOME_NAV_LINKS} />
        </div>
      </header>

      <main>
        <section className="relative border-b border-zinc-800 bg-gradient-to-b from-zinc-900 to-zinc-950 px-4 py-20 md:overflow-visible md:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Workout Plan & Calorie Counter to Lose Fat
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-zinc-400">
              Follow a structured workout plan, count calories accurately, and lose fat while tracking every step of your body transformation.
            </p>
            <div className="mt-10 flex justify-center">
              <DownloadButtons />
            </div>
            <PhoneCarousel />
          </div>
        </section>

        <section id="transformation" className="border-b border-zinc-800 px-4 py-16 md:py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-2xl font-bold text-white md:text-3xl">
              Results you can expect
            </h2>
            <p className="mt-2 text-center text-zinc-500">
              2–3 months. −6 kg / −13 lbs.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6">
              <div>
                <div className="flex min-h-[280px] items-center justify-center overflow-hidden rounded-2xl bg-zinc-900 md:min-h-[360px]">
                  <Image
                    src="/img/before.jpeg"
                    alt="Before using ShapePal"
                    width={400}
                    height={530}
                    className="h-full w-full object-cover md:object-contain"
                  />
                </div>
                <p className="mt-2 text-center text-xs uppercase tracking-widest text-zinc-500">
                  Before
                </p>
              </div>
              <div>
                <div className="flex min-h-[280px] items-center justify-center overflow-hidden rounded-2xl bg-zinc-900 ring-2 ring-[#00EBC4]/60 md:min-h-[360px]">
                  <Image
                    src="/img/after.jpeg"
                    alt="After using ShapePal — lost 6 kg (13 lbs)"
                    width={400}
                    height={530}
                    className="h-full w-full object-cover md:object-contain"
                  />
                </div>
                <p className="mt-2 text-center text-xs uppercase tracking-widest text-[#00EBC4]">
                  After
                </p>
              </div>
            </div>
            <p className="mt-12 text-center text-sm font-semibold uppercase tracking-widest text-zinc-500">
              Cutting
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-6">
              <div>
                <div className="flex min-h-[280px] items-center justify-center overflow-hidden rounded-2xl bg-zinc-900 md:min-h-[360px]">
                  <Image
                    src="/img/cutting-before.jpeg"
                    alt="Before cutting — assessing body fat"
                    width={400}
                    height={530}
                    className="h-full w-full object-cover md:object-contain"
                  />
                </div>
                <p className="mt-2 text-center text-xs uppercase tracking-widest text-zinc-500">
                  Before
                </p>
              </div>
              <div>
                <div className="flex min-h-[280px] items-center justify-center overflow-hidden rounded-2xl bg-zinc-900 ring-2 ring-[#00EBC4]/60 md:min-h-[360px]">
                  <Image
                    src="/img/cutting-after.jpeg"
                    alt="After cutting — lean definition"
                    width={400}
                    height={530}
                    className="h-full w-full object-cover md:object-contain"
                  />
                </div>
                <p className="mt-2 text-center text-xs uppercase tracking-widest text-[#00EBC4]">
                  After
                </p>
              </div>
            </div>
            <div className="mt-12 flex justify-center">
              <DownloadButtons />
            </div>
          </div>
        </section>

        <footer className="px-4 py-12">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col items-center justify-between gap-6 border-t border-zinc-800 pt-8 md:flex-row">
              <a href="/" className="flex items-center gap-2">
                <span className="font-semibold text-white">Shape</span>
                <Image
                  src="/img/logo.png"
                  alt="Pal"
                  width={50}
                  height={50}
                  className="rounded-lg"
                />
              </a>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
                <Link href="/support" className="text-zinc-400 transition hover:text-white">
                  Support
                </Link>
                <Link href="/terms" className="text-zinc-400 transition hover:text-white">
                  Terms
                </Link>
                <Link href="/privacy" className="text-zinc-400 transition hover:text-white">
                  Privacy
                </Link>
              </div>
              <p className="text-sm text-zinc-500">
                Workouts · Plan · Calorie Counter · Fitness Transformation
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
    </PageLoader>
  );
}
