import type { Metadata } from "next";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { LAST_VERIFIED } from "@/content/launchpad";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "GSoC Launchpad",
    template: "%s · GSoC Launchpad",
  },
  description:
    "From zero programming and open-source experience to a prepared Google Summer of Code applicant.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <body className="flex min-h-screen flex-col antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-tile focus:bg-accent focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <header className="border-b border-seam">
          <nav
            aria-label="Primary"
            className="section flex flex-wrap items-center justify-between gap-4 py-4"
          >
            <Link href="/" className="tap inline-flex items-center font-display text-lg font-bold text-ink">
              GSoC Launchpad
            </Link>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/launchpad"
                className="tap inline-flex items-center rounded-tile px-4 py-3 text-sm font-medium text-haze"
              >
                Roadmap
              </Link>
              <a
                href="https://summerofcode.withgoogle.com"
                target="_blank"
                rel="noreferrer"
                className="tap inline-flex items-center rounded-tile px-4 py-3 text-sm font-medium text-haze"
              >
                Official GSoC site ↗
              </a>
              <ThemeToggle />
            </div>
          </nav>
        </header>

        <div className="flex-1">{children}</div>

        <footer className="mt-10 border-t border-seam">
          <div className="section flex flex-wrap items-start justify-between gap-6 py-8">
            <div>
              <p className="font-display text-sm font-bold text-ink">GSoC Launchpad</p>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-haze">
                Preparation progress only — never a selection prediction. An
                independent study project, not affiliated with Google.
              </p>
            </div>
            <p className="font-mono text-xs leading-relaxed text-dust">
              Official facts last verified: {LAST_VERIFIED}.
              <br />
              Dates and organisations change yearly.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
