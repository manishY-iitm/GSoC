import Link from "next/link";
import { STAGES, totalTasks } from "@/content/launchpad";

export default function Home() {
  return (
    <main id="main">
      <header className="section page-top pb-4">
        <p className="chip">GSoC Launchpad</p>
        <h1 className="mt-6 max-w-4xl font-display text-display-lg font-bold leading-[1.15]">
          From zero to a prepared GSoC applicant.
        </h1>
        <p className="measure mt-4 text-body-lg text-haze">
          An interactive preparation roadmap: 10 stages, {totalTasks()} tasks,
          official links, and personal progress tracking. Built for someone
          starting with no programming or open-source experience.
        </p>
        <Link
          href="/launchpad"
          className="tap mt-8 inline-flex items-center rounded-tile bg-accent px-6 py-3 text-sm font-semibold text-white"
        >
          Open the roadmap
        </Link>
      </header>

      <section className="section py-14" aria-label="The ten stages">
        <h2 className="font-display text-display-md font-bold">The ten stages</h2>
        <ol className="mt-6 grid gap-px overflow-hidden rounded-panel bg-seam sm:grid-cols-2 lg:grid-cols-3">
          {STAGES.map((s) => (
            <li key={s.key} className="bg-raise p-6">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-dust">
                Stage {s.stage}
              </p>
              <h3 className="mt-2 font-display text-base font-bold leading-snug text-ink">
                <Link href="/launchpad" className="tap block">
                  {s.title}
                </Link>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-haze">{s.summary}</p>
              <p className="mt-3 font-mono text-xs text-dust">{s.estimate}</p>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
