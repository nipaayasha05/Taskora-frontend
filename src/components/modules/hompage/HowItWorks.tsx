import { Users, FolderKanban, CheckCircle2 } from "lucide-react";

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="bg-slate-50 px-6 py-20 dark:bg-slate-950"
    >
      <div className="">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-widest text-blue-600 dark:text-blue-400">
            HOW IT WORKS
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Get started in 3 simple steps
          </h2>

          <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
            From setting up your workspace to tracking progress, Taskora keeps
            your team organized.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {/* Step 1 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:shadow-black/20">
            <div className="flex size-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
              <Users className="size-6" />
            </div>

            <p className="mt-6 text-sm font-semibold text-blue-600 dark:text-blue-400">
              STEP 01
            </p>

            <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
              Create Your Workspace
            </h3>

            <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
              Create your organization, set up your workspace, and invite team
              members.
            </p>
          </div>

          {/* Step 2 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:shadow-black/20">
            <div className="flex size-12 items-center justify-center rounded-xl bg-violet-50 text-violet-600 dark:bg-violet-950 dark:text-violet-400">
              <FolderKanban className="size-6" />
            </div>

            <p className="mt-6 text-sm font-semibold text-violet-600 dark:text-violet-400">
              STEP 02
            </p>

            <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
              Organize Your Work
            </h3>

            <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
              Create projects, assign tasks, and organize your work into
              sprints.
            </p>
          </div>

          {/* Step 3 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:shadow-black/20">
            <div className="flex size-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
              <CheckCircle2 className="size-6" />
            </div>

            <p className="mt-6 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
              STEP 03
            </p>

            <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
              Track Your Progress
            </h3>

            <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
              Monitor task status, follow sprint progress, and work toward your
              goals together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
