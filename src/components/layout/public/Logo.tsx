import React from "react";

import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  darkOnly?: boolean;
};

export const Logo = ({ darkOnly = false }: LogoProps) => {
  return (
    <Link href="/" className="flex items-center gap-1 shrink-0">
      <div className="">
        {darkOnly ? (
          <Image
            src="/taskora-dark-theme.png"
            alt="Dark Logo"
            width={60}
            height={55}
            className=" h-16 w-16 object-contain"
          />
        ) : (
          <>
            <Image
              src="/taskora.png"
              alt="Light Logo"
              width={60}
              height={55}
              className="block dark:hidden h-16 w-16 object-contain"
            />
            <Image
              src="/taskora-dark-theme.png"
              alt="Taskora Logo"
              width={60}
              height={55}
              className="hidden h-16 w-16 object-contain dark:block"
            />
          </>
        )}
      </div>

      <h1 className="text-2xl font-extrabold tracking-tight">
        {darkOnly ? (
          <>
            <span className=" text-white">Task</span>
            <span className=" text-blue-400">ora</span>
          </>
        ) : (
          <>
            <span className="text-slate-900 dark:text-white">Task</span>
            <span className="text-blue-500 dark:text-blue-400">ora</span>
          </>
        )}
      </h1>
    </Link>
  );
};

export default Logo;
