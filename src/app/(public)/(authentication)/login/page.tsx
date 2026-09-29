import { LoginForm } from "@/components/form/Login-form";
import { GalleryVerticalEnd } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className=" min-h-svh ">
      <div className="flex flex-col min-h-svh gap-4 p-6 md:p-10 lg:hidden">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link href="/" className="flex items-center gap-2 font-medium">
            <div className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <GalleryVerticalEnd className="size-4" />
            </div>
            Taskora
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-md">
            <LoginForm />
          </div>
        </div>
      </div>

      <div className="relative hidden min-h-svh lg:block">
        <img
          src="/home.jpg"
          alt="home"
          className="absolute left-1/2 top-1/2 h-[90%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-lg object-cover dark:brightness-[0.2] dark:grayscale"
        />

        <div className="absolute inset-y-0 left-1/2 flex items-center justify-end w-full max-w-xl">
          <div className="w-full max-w-md">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}
