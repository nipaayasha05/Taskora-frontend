import { Layers3, Users, ChartNoAxesCombined } from "lucide-react";

const WhyTaskora = () => {
  return (
    <section className=" px-6 py-20 dark:bg-slate-950">
      <div className="">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-widest text-blue-600 dark:text-blue-400">
            WHY TASKORA
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Work better, together.
          </h2>

          <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
            Keep your projects organized, bring your team together, and make
            progress with confidence.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:shadow-black/20">
            <div className="flex size-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
              <Layers3 className="size-6" />
            </div>

            <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">
              One Organized Workspace
            </h3>

            <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
              Manage projects, tasks, teams, and sprints from one convenient
              place.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:shadow-black/20">
            <div className="flex size-12 items-center justify-center rounded-xl bg-violet-50 text-violet-600 dark:bg-violet-950 dark:text-violet-400">
              <Users className="size-6" />
            </div>

            <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">
              Better Teamwork
            </h3>

            <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
              Bring team members together and keep responsibilities clear.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:shadow-black/20">
            <div className="flex size-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
              <ChartNoAxesCombined className="size-6" />
            </div>

            <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">
              Clear Progress Tracking
            </h3>

            <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
              Follow task statuses and understand how your projects are moving
              forward.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTaskora;
