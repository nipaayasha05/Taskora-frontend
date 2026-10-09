import React from "react";

import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  darkOnly?: boolean;
  showText?: boolean;
  size?: string;
};

export const Logo = ({
  darkOnly = false,
  showText = true,
  size = "h-16 w-16",
}: LogoProps) => {
  return (
    <Link href="/" className="flex items-center gap-1 shrink-0">
      <div className="">
        {darkOnly ? (
          <Image
            src="/taskora-dark-theme.png"
            alt="Dark Logo"
            width={60}
            height={55}
            className={`${size} object-contain`}
          />
        ) : (
          <>
            <Image
              src="/taskora.png"
              alt="Light Logo"
              width={60}
              height={55}
              // className="block dark:hidden h-16 w-16 object-contain"
              className={`${size} object-contain block dark:hidden `}
            />
            <Image
              src="/taskora-dark-theme.png"
              alt="Taskora Logo"
              width={60}
              height={55}
              className={`hidden ${size} object-contain dark:block`}
            />
          </>
        )}
      </div>

      <h1 className="text-2xl font-extrabold tracking-tight">
        {showText && (
          <div className="text-2xl font-extrabold tracking-tight">
            <span className="text-slate-600 dark:text-white">Task</span>
            <span className="text-blue-500 dark:text-blue-400">ora</span>
          </div>
        )}
      </h1>
    </Link>
  );
};

export default Logo;
