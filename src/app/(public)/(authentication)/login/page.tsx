import { LoginForm } from "@/components/form/Login-form";
import { GalleryVerticalEnd } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className=" min-h-svh ">
      <div className="flex flex-col min-h-svh gap-4 p-6 md:p-10 lg:hidden">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-md">
            <LoginForm />
          </div>
        </div>
      </div>

      <div className="relative hidden min-h-svh lg:block">
        <div className="absolute  min-h-[650px] max-w-5xl w-[70%] flex bg-slate-950 left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2  overflow-hidden rounded-lg text-gray-100  border">
          <div className=" flex w-1/2 flex-col  text-white p-10">
            <div>
              <div className="max-w-sm">
                <h2 className="text-4xl font-bold">
                  Manage Your Work <br />
                  <span className="text-slate-400">Move forward.</span>
                </h2>
              </div>
            </div>
            <img
              src="/Login.png"
              alt="Sign up"
              className="absolute left-1/5 top-1/2 h-[350px] w-[350px] -translate-x-1/3 -translate-y-1/2 rounded-lg object-contain"
            />
          </div>
          <div className=" flex w-1/2 items-center justify-center bg-background p-8">
            <div className="w-full max-w-md">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
