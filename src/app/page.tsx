import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="text-3xl font-bold text-zinc-600 dark:text-white">
        Welcome to Taskora
      </div>
      <Button className="mt-4">Get Started</Button>
    </div>
  );
}
