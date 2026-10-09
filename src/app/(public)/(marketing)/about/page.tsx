import Link from "next/link";
import {
  ArrowRight,
  Target,
  Users,
  Layers3,
  CheckCircle2,
  Sparkles,
  HeartHandshake,
  ChartNoAxesCombined,
} from "lucide-react";

const About = () => {
  return (
    <main className="overflow-hidden  text-slate-900 dark:bg-slate-950 dark:text-white">
      {/* Hero Section */}
      <section className="relative rounded-lg border-b border-slate-100 bg-gradient-to-b from-blue-50/80 to-white px-6 py-20 sm:py-28 dark:border-slate-800 dark:from-slate-900 dark:to-slate-950">
        <div className="">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-100  px-4 py-2 text-sm font-medium text-blue-700 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-blue-400">
              <Sparkles className="size-4" />
              About Taskora
            </span>

            <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Great work starts with
              <span className="block text-blue-600 dark:text-blue-400">
                better teamwork.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
              Taskora helps teams organize projects, manage tasks, and track
              progress in one place, so everyone can work together with more
              clarity and confidence.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/login"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
              >
                Get Started
                <ArrowRight className="size-4" />
              </Link>

              <a
                href="#our-story"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200  px-6 py-3.5 font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-blue-800 dark:hover:bg-slate-800"
              >
                Discover Our Story
              </a>
            </div>
          </div>

          {/* Decorative Project Preview */}
          <div className="mx-auto mt-16 max-w-4xl rounded-2xl border border-slate-200  p-5 shadow-2xl shadow-blue-900/5 sm:p-8 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20">
            <div className="flex flex-col justify-between gap-4 border-b border-slate-100 pb-5 sm:flex-row sm:items-center dark:border-slate-800">
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Workspace overview
                </p>
                <h2 className="mt-1 text-xl font-bold">
                  Bring every task together.
                </h2>
              </div>

              <span className="flex w-fit items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-sm font-medium text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
                <CheckCircle2 className="size-4" />
                Stay organized
              </span>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl bg-blue-50 p-5 dark:bg-blue-950/60">
                <Layers3 className="size-6 text-blue-600 dark:text-blue-400" />
                <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                  Projects
                </p>
                <p className="mt-1 text-lg font-bold">All in one place</p>
              </div>

              <div className="rounded-xl bg-violet-50 p-5 dark:bg-violet-950/60">
                <Users className="size-6 text-violet-600 dark:text-violet-400" />
                <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                  Teamwork
                </p>
                <p className="mt-1 text-lg font-bold">Work together</p>
              </div>

              <div className="rounded-xl bg-emerald-50 p-5 dark:bg-emerald-950/60">
                <ChartNoAxesCombined className="size-6 text-emerald-600 dark:text-emerald-400" />
                <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                  Progress
                </p>
                <p className="mt-1 text-lg font-bold">See what matters</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section id="our-story" className="px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold tracking-widest text-blue-600 dark:text-blue-400">
              OUR STORY
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              Making project management feel simpler.
            </h2>

            <p className="mt-6 leading-8 text-slate-600 dark:text-slate-400">
              Managing a project often means handling tasks, coordinating
              people, organizing deadlines, and keeping track of progress. When
              everything is scattered, it becomes harder to see the bigger
              picture.
            </p>

            <p className="mt-4 leading-8 text-slate-600 dark:text-slate-400">
              Taskora brings these essential parts of project management
              together in one workspace. Our goal is to help teams spend less
              time managing scattered information and more time moving their
              work forward.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -left-5 -top-5 size-24 rounded-full bg-blue-100/70 blur-2xl dark:bg-blue-900/40" />

            <div className="relative rounded-3xl border border-blue-100 bg-blue-50/60 p-7 sm:p-10 dark:border-slate-800 dark:bg-slate-900">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                <Layers3 className="size-7" />
              </div>

              <h3 className="mt-7 text-2xl font-bold">
                One workspace.
                <span className="block text-blue-600 dark:text-blue-400">
                  A clearer way to work.
                </span>
              </h3>

              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                From projects and teams to sprints and tasks, Taskora helps
                bring your workflow into focus.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Organize projects and tasks",
                  "Keep team responsibilities clear",
                  "Track work as it moves forward",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="size-5 shrink-0 text-blue-600 dark:text-blue-400" />
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-slate-50 px-6 py-20 sm:py-24 dark:bg-slate-900/60">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
            <Target className="size-7" />
          </div>

          <p className="mt-6 text-sm font-semibold tracking-widest text-blue-600 dark:text-blue-400">
            OUR MISSION
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
            Help teams turn plans into progress.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400">
            Our mission is to make project management more organized,
            transparent, and collaborative. We want teams to understand what
            needs to be done, who is responsible, and how their work is
            progressing.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold tracking-widest text-blue-600 dark:text-blue-400">
              WHAT MATTERS TO US
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              The principles behind Taskora.
            </h2>

            <p className="mt-5 leading-7 text-slate-600 dark:text-slate-400">
              Good project management is about more than completing tasks. It is
              about helping people work better together.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200  p-7 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-900 dark:hover:shadow-black/20">
              <div className="flex size-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                <Layers3 className="size-6" />
              </div>

              <h3 className="mt-5 text-xl font-bold">Simplicity</h3>

              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                Keep projects and tasks organized with a clear, easy-to-follow
                workflow.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200  p-7 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-900 dark:hover:shadow-black/20">
              <div className="flex size-12 items-center justify-center rounded-xl bg-violet-50 text-violet-600 dark:bg-violet-950 dark:text-violet-400">
                <HeartHandshake className="size-6" />
              </div>

              <h3 className="mt-5 text-xl font-bold">Collaboration</h3>

              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                Help team members stay connected and understand their
                responsibilities.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200  p-7 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-900 dark:hover:shadow-black/20">
              <div className="flex size-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
                <ChartNoAxesCombined className="size-6" />
              </div>

              <h3 className="mt-5 text-xl font-bold">Progress</h3>

              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                Make project progress easier to follow, so teams can focus on
                their next steps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 pb-20 sm:pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-blue-600 px-6 py-14 text-center text-white sm:px-12 sm:py-16">
          <p className="text-sm font-semibold tracking-widest text-blue-100">
            LET'S WORK BETTER
          </p>

          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">
            Ready to bring your projects together?
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-blue-100">
            Start organizing your work, connecting your team, and tracking
            progress with Taskora.
          </p>

          <Link
            href="/login"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl  px-6 py-3.5 font-semibold text-blue-700 transition hover:bg-blue-50"
          >
            Get Started with Taskora
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default About;
