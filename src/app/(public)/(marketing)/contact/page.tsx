import Link from "next/link";
import {
  ArrowRight,
  Mail,
  MessageCircle,
  Clock,
  HelpCircle,
  ChevronDown,
  Phone,
  MapPin,
  Globe,
  Share2,
} from "lucide-react";

const Contact = () => {
  return (
    <main className="overflow-hidden  text-slate-900 dark:bg-slate-950 dark:text-white">
      {/* Hero Section */}
      <section className="border-b border-slate-100 bg-gradient-to-b from-zinc-50 to-white rounded-lg px-6 py-24 sm:py-28 dark:border-slate-800 dark:from-slate-900 dark:to-slate-950">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100  px-4 py-2 text-sm font-medium text-blue-700 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-blue-400">
            <MessageCircle className="size-4" />
            Contact Taskora
          </span>

          <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            We’re here to
            <span className="block text-blue-600 dark:text-blue-400">
              help you move forward.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
            Questions about Taskora? Need help getting started? Find the right
            way to connect with us and get the information you need.
          </p>

          <a
            href="#contact-options"
            className="mt-9 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
          >
            Explore Contact Options
            <ArrowRight className="size-4" />
          </a>
        </div>
      </section>

      {/* Contact Options */}
      <section id="contact-options" className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-widest text-blue-600 dark:text-blue-400">
              GET IN TOUCH
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              How can we help?
            </h2>

            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
              Choose the option that best matches what you’re looking for.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Email Support */}
            <div className="group rounded-2xl border border-slate-200  p-7 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-800 dark:hover:shadow-black/20">
              <div className="flex size-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-950 dark:text-blue-400">
                <Mail className="size-6" />
              </div>

              <h3 className="mt-6 text-xl font-bold">Email Support</h3>

              <p className="mt-3 min-h-14 text-sm leading-7 text-slate-600 dark:text-slate-400">
                Have a question or need assistance? Reach out to us by email.
              </p>

              <a
                href="mailto:support@taskora.com"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Send an email
                <ArrowRight className="size-4 transition group-hover:translate-x-1" />
              </a>
            </div>

            {/* General Questions */}
            <div className="group rounded-2xl border border-slate-200  p-7 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-800 dark:hover:shadow-black/20">
              <div className="flex size-12 items-center justify-center rounded-xl bg-violet-50 text-violet-600 transition group-hover:bg-violet-600 group-hover:text-white dark:bg-violet-950 dark:text-violet-400">
                <HelpCircle className="size-6" />
              </div>

              <h3 className="mt-6 text-xl font-bold">General Questions</h3>

              <p className="mt-3 min-h-14 text-sm leading-7 text-slate-600 dark:text-slate-400">
                Learn more about Taskora, its features, and how to get started.
              </p>

              <a
                href="#faq"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Browse FAQs
                <ArrowRight className="size-4 transition group-hover:translate-x-1" />
              </a>
            </div>

            {/* Feedback */}
            <div className="group rounded-2xl border border-slate-200  p-7 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-800 dark:hover:shadow-black/20">
              <div className="flex size-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition group-hover:bg-emerald-600 group-hover:text-white dark:bg-emerald-950 dark:text-emerald-400">
                <MessageCircle className="size-6" />
              </div>

              <h3 className="mt-6 text-xl font-bold">Share Feedback</h3>

              <p className="mt-3 min-h-14 text-sm leading-7 text-slate-600 dark:text-slate-400">
                Have an idea or suggestion? We value feedback that helps improve
                Taskora.
              </p>

              <a
                href="mailto:support@taskora.com?subject=Taskora%20Feedback"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Share your ideas
                <ArrowRight className="size-4 transition group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-slate-50 px-6 py-20 sm:py-24 dark:bg-slate-900/60">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold tracking-widest text-blue-600 dark:text-blue-400">
              CONTACT INFORMATION
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Let’s connect with Taskora.
            </h2>

            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
              Choose your preferred way to reach us. We would love to hear from
              you.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Email */}
            <div className="rounded-2xl border border-slate-200  p-7 transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:shadow-black/20">
              <div className="flex size-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                <Mail className="size-6" />
              </div>

              <h3 className="mt-5 text-lg font-bold">Email Address</h3>

              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Send us your questions and feedback.
              </p>

              <a
                href="mailto:support@taskora.com"
                className="mt-4 inline-block break-all text-sm font-semibold text-blue-600 hover:underline dark:text-blue-400"
              >
                support@taskora.com
              </a>
            </div>

            {/* Phone */}
            <div className="rounded-2xl border border-slate-200  p-7 transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:shadow-black/20">
              <div className="flex size-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
                <Phone className="size-6" />
              </div>

              <h3 className="mt-5 text-lg font-bold">Phone Number</h3>

              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Prefer to talk? Reach us by phone.
              </p>

              <a
                href="tel:+8801XXXXXXXXX"
                className="mt-4 inline-block text-sm font-semibold text-blue-600 hover:underline dark:text-blue-400"
              >
                +880 1234567890
              </a>
            </div>

            {/* Address */}
            <div className="rounded-2xl border border-slate-200  p-7 transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:shadow-black/20">
              <div className="flex size-12 items-center justify-center rounded-xl bg-violet-50 text-violet-600 dark:bg-violet-950 dark:text-violet-400">
                <MapPin className="size-6" />
              </div>

              <h3 className="mt-5 text-lg font-bold">Our Address</h3>

              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Find our office location.
              </p>

              <p className="mt-4 text-sm font-semibold leading-6 text-blue-600 dark:text-blue-400">
                Add your office address here
              </p>
            </div>

            {/* Website */}
            <div className="rounded-2xl border border-slate-200  p-7 transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:shadow-black/20">
              <div className="flex size-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600 dark:bg-orange-950 dark:text-orange-400">
                <Globe className="size-6" />
              </div>

              <h3 className="mt-5 text-lg font-bold">Website</h3>

              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Explore the Taskora platform.
              </p>

              <a
                href="https://your-taskora-domain.com"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block break-all text-sm font-semibold text-blue-600 hover:underline dark:text-blue-400"
              >
                your-taskora-domain.com
              </a>
            </div>

            {/* Working Hours */}
            <div className="rounded-2xl border border-slate-200  p-7 transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:shadow-black/20">
              <div className="flex size-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-950 dark:text-amber-400">
                <Clock className="size-6" />
              </div>

              <h3 className="mt-5 text-lg font-bold">Working Hours</h3>

              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Our usual support availability.
              </p>

              <p className="mt-4 text-sm font-semibold text-slate-700 dark:text-slate-300">
                Add your support hours
              </p>
            </div>

            {/* Social Media */}
            <div className="rounded-2xl border border-slate-200  p-7 transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:shadow-black/20">
              <div className="flex size-12 items-center justify-center rounded-xl bg-pink-50 text-pink-600 dark:bg-pink-950 dark:text-pink-400">
                <Share2 className="size-6" />
              </div>

              <h3 className="mt-5 text-lg font-bold">Social Media</h3>

              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Follow Taskora for updates and announcements.
              </p>

              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  LinkedIn
                </a>

                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  Facebook
                </a>

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-widest text-blue-600 dark:text-blue-400">
              FAQ
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Common questions.
            </h2>

            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
              Quick answers to help you get to know Taskora.
            </p>
          </div>

          <div className="mt-10 space-y-3">
            <details className="group rounded-xl border border-slate-200  p-5 dark:border-slate-800 dark:bg-slate-900">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                What is Taskora?
                <ChevronDown className="size-5 shrink-0 text-slate-500 transition group-open:rotate-180 dark:text-slate-400" />
              </summary>

              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
                Taskora is a project management platform that helps teams
                organize projects, manage tasks, coordinate team members, and
                track progress in one workspace.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200  p-5 dark:border-slate-800 dark:bg-slate-900">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                How do I get started?
                <ChevronDown className="size-5 shrink-0 text-slate-500 transition group-open:rotate-180 dark:text-slate-400" />
              </summary>

              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
                Start by signing in to Taskora. You can then explore the
                available workspace and project management features.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200  p-5 dark:border-slate-800 dark:bg-slate-900">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                How can I share a suggestion?
                <ChevronDown className="size-5 shrink-0 text-slate-500 transition group-open:rotate-180 dark:text-slate-400" />
              </summary>

              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
                You can send your ideas or feedback through the email option
                above.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200  p-5 dark:border-slate-800 dark:bg-slate-900">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                Where can I get help with my account?
                <ChevronDown className="size-5 shrink-0 text-slate-500 transition group-open:rotate-180 dark:text-slate-400" />
              </summary>

              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
                Contact the support email with a description of your issue.
                Never include your password in an email.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 pb-20 sm:pb-24">
        <div className="mx-auto max-w-7xl rounded-3xl bg-blue-600 px-6 py-14 text-center text-white sm:px-12 sm:py-16">
          <div className="mx-auto flex size-12 items-center justify-center rounded-xl /15">
            <Clock className="size-6" />
          </div>

          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-bold sm:text-4xl">
            Let’s make your work simpler.
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-blue-100">
            Organize your projects, bring your team together, and keep your work
            moving forward with Taskora.
          </p>

          <Link
            href="/login"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl  px-6 py-3.5 font-semibold text-blue-700 transition hover:bg-blue-50"
          >
            Get Started
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Contact;
