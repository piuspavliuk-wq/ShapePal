import type { Metadata } from "next";
import Link from "next/link";
import { LegalHeader, LegalFooter } from "../components/legal-layout";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with ShapePal. Contact support, view FAQ, and learn about app features.",
};

const SUPPORT_EMAIL = "shapepalfit@gmail.com";

export default function SupportPage() {
  return (
    <>
      <LegalHeader backHref="/" backLabel="Back to Home" />
      <main className="min-h-screen flex flex-col">
        <div className="mx-auto w-full max-w-4xl px-4 py-12 md:py-16">
          {/* Hero */}
          <section className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              How can we help you?
            </h1>
            <p className="mt-4 text-lg text-zinc-400">
              We&apos;re here to support your fitness journey
            </p>
          </section>

          {/* Support cards */}
          <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 text-center transition hover:border-[#00EBC4]/40 hover:shadow-[0_8px_24px_rgba(0,235,196,0.12)]">
              <div className="text-4xl mb-4">📧</div>
              <h2 className="text-lg font-semibold text-white mb-2">Contact Us</h2>
              <p className="text-sm text-zinc-500 mb-4">Get in touch with our support team</p>
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="inline-flex items-center justify-center rounded-xl bg-[#00EBC4] px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-[#00EBC4]/90"
              >
                Email Support
              </a>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 text-center transition hover:border-[#00EBC4]/40">
              <div className="text-4xl mb-4">❓</div>
              <h2 className="text-lg font-semibold text-white mb-2">FAQ</h2>
              <p className="text-sm text-zinc-500 mb-4">Find answers to common questions</p>
              <Link
                href="#faq"
                className="inline-flex items-center justify-center rounded-xl border border-[#00EBC4]/50 bg-transparent px-5 py-2.5 text-sm font-semibold text-[#00EBC4] transition hover:bg-[#00EBC4]/10"
              >
                View FAQ
              </Link>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 text-center transition hover:border-[#00EBC4]/40">
              <div className="text-4xl mb-4">📱</div>
              <h2 className="text-lg font-semibold text-white mb-2">App Features</h2>
              <p className="text-sm text-zinc-500 mb-4">Learn about ShapePal&apos;s capabilities</p>
              <Link
                href="#features"
                className="inline-flex items-center justify-center rounded-xl border border-[#00EBC4]/50 bg-transparent px-5 py-2.5 text-sm font-semibold text-[#00EBC4] transition hover:bg-[#00EBC4]/10"
              >
                Learn More
              </Link>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 text-center transition hover:border-[#00EBC4]/40">
              <div className="text-4xl mb-4">🗑️</div>
              <h2 className="text-lg font-semibold text-white mb-2">Delete Account</h2>
              <p className="text-sm text-zinc-500 mb-4">Request account deletion or delete in-app</p>
              <Link
                href="#account-deletion"
                className="inline-flex items-center justify-center rounded-xl border border-[#00EBC4]/50 bg-transparent px-5 py-2.5 text-sm font-semibold text-[#00EBC4] transition hover:bg-[#00EBC4]/10"
              >
                Account Deletion
              </Link>
            </div>
          </section>

          {/* Account Deletion */}
          <section id="account-deletion" className="mb-16 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Account Deletion</h2>
            <div className="space-y-4 text-zinc-400">
              <p>Users can delete their ShapePal account directly in the app:</p>
              <p><strong className="text-zinc-300">Profile → Delete Account.</strong></p>
              <p>If you cannot access the app, you can request account deletion by contacting us:</p>
              <div className="rounded-xl border border-[#00EBC4]/30 bg-[#00EBC4]/10 p-4">
                <p className="text-zinc-200">
                  <strong>Email:</strong>{" "}
                  <a href={`mailto:${SUPPORT_EMAIL}`} className="text-[#00EBC4] hover:underline">
                    {SUPPORT_EMAIL}
                  </a>
                </p>
              </div>
              <p>Please include the email address associated with your account.</p>
              <p>All account data will be permanently deleted within 30 days.</p>
            </div>
          </section>

          {/* Contact */}
          <section className="mb-16 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 md:p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
            <p className="text-zinc-400">
              <strong className="text-zinc-300">Email:</strong>{" "}
              <a href={`mailto:${SUPPORT_EMAIL}`} className="text-[#00EBC4] hover:underline">
                {SUPPORT_EMAIL}
              </a>
            </p>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: "How do I reset my password?",
                  a: 'You can reset your password from the login screen by tapping "Forgot Password" and following the instructions sent to your email.',
                },
                {
                  q: "How do I track my workouts?",
                  a: "Navigate to the Programs tab, select a program, and start your workout. The app will automatically track your progress.",
                },
                {
                  q: "Can I use the app without internet?",
                  a: "Yes! Most features work offline. You'll need internet for initial setup and syncing your data.",
                },
                {
                  q: "How do I cancel my subscription?",
                  a: "You can manage your subscription through your device's App Store or Google Play Store settings.",
                },
                {
                  q: "Is my data secure?",
                  a: (
                    <>
                      Yes, we take your privacy seriously. Please review our{" "}
                      <Link href="/privacy" className="text-[#00EBC4] hover:underline">
                        Privacy Policy
                      </Link>{" "}
                      for more information.
                    </>
                  ),
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 transition hover:border-[#00EBC4]/40"
                >
                  <h3 className="text-[#00EBC4] font-semibold mb-2">{item.q}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Features */}
          <section id="features" className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">App Features</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: "🏋️", title: "Workout Programs", desc: "Access structured workout programs designed for all fitness levels" },
                { icon: "📊", title: "Progress Tracking", desc: "Track your workouts, weight, and fitness progress over time" },
                { icon: "🍎", title: "Nutrition Tracking", desc: "Log your meals and track calories with our barcode scanner" },
                { icon: "📅", title: "Workout Schedule", desc: "Plan and organize your training schedule" },
                { icon: "🔥", title: "Streak Tracking", desc: "Build consistency with daily workout streaks" },
                { icon: "⏰", title: "Reminders", desc: "Set reminders to never miss a workout" },
              ].map((f) => (
                <div
                  key={f.title}
                  className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 transition hover:border-[#00EBC4]/40"
                >
                  <h3 className="text-white font-semibold mb-2">{f.icon} {f.title}</h3>
                  <p className="text-zinc-500 text-sm">{f.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
        <LegalFooter />
      </main>
    </>
  );
}
