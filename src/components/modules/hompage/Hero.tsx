"use client";

import Link from "next/link";
import { CheckCircle2, Circle, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section className="overflow-hidden  text-slate-900 dark:bg-slate-950 dark:text-white">
      <div className=" grid  items-center gap-12 px-6 py-20 lg:grid-cols-2">
        {/* Left Content */}
        <div>
          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600 dark:bg-blue-950 dark:text-blue-400">
            Project Management Made Easy
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Plan smarter.
            <span className="mt-2 block text-blue-600 dark:text-blue-400">
              Deliver better.
            </span>
          </h1>

          <p className="mt-6 max-w-lg leading-7 text-slate-600 dark:text-slate-400">
            Manage projects, organize teams, and track tasks in one simple
            workspace with Taskora.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/organizations"
              className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              Get started →
            </Link>
          </div>

          <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">
            ✓ Projects　 ✓ Teams　 ✓ Task tracking
          </p>
        </div>

        {/* Right Project Card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-blue-100/60 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Your project
              </p>

              <h2 className="mt-1 text-xl font-bold text-slate-900 dark:text-white">
                Website Redesign
              </h2>
            </div>

            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
              Active
            </span>
          </div>

          <div className="mt-8 flex justify-between text-sm">
            <span className="text-slate-500 dark:text-slate-400">
              Project progress
            </span>

            <span className="font-semibold text-blue-600 dark:text-blue-400">
              75%
            </span>
          </div>

          <div className="mt-3 h-2 rounded-full bg-slate-100 dark:bg-slate-800">
            <div className="h-2 w-3/4 rounded-full bg-blue-600 dark:bg-blue-500" />
          </div>

          <div className="mt-7 space-y-4">
            {/* Completed Task */}
            <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-4 dark:bg-slate-800">
              <CheckCircle2 className="size-5 shrink-0 text-emerald-500" />

              <span className="flex-1 text-sm text-slate-700 dark:text-slate-200">
                Design homepage
              </span>

              <span className="text-xs text-emerald-600 dark:text-emerald-400">
                Done
              </span>
            </div>

            {/* In Progress Task */}
            <div className="flex items-center gap-3 rounded-xl border border-blue-100 bg-blue-50/50 p-4 dark:border-blue-900 dark:bg-blue-950/40">
              <Clock className="size-5 shrink-0 text-blue-600 dark:text-blue-400" />

              <span className="flex-1 text-sm text-slate-700 dark:text-slate-200">
                Build dashboard
              </span>

              <span className="text-xs text-blue-600 dark:text-blue-400">
                Working
              </span>
            </div>

            {/* Pending Task */}
            <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-4 dark:bg-slate-800">
              <Circle className="size-5 shrink-0 text-slate-400" />

              <span className="flex-1 text-sm text-slate-700 dark:text-slate-200">
                Test application
              </span>

              <span className="text-xs text-slate-500 dark:text-slate-400">
                Pending
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
