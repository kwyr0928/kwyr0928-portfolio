"use client";

import Link from "next/link";
import Header from "~/components/header";

export default function HomePage() {
  return (
    <div>
      <div className="h-full w-full">
        <Header />
        <div className="px-8 pt-36 md:px-16">
          <p>このページは、今後更新予定です。（2024/01/12時点）</p>
        </div>
        <div className="mx-auto mt-10 flex w-full flex-col items-center justify-center gap-10 text-white md:flex-row">
        <Link href="/about">
          <div className="flex h-40 w-40 items-center justify-center rounded-full bg-purple2 hover:bg-purple2/80">
           <p>About</p>
          </div>
          </Link>
          <Link href="/portfolio">
          <div className="flex h-40 w-40 items-center justify-center rounded-full bg-purple2 hover:bg-purple2/80">
            <p>Portfolio</p>
          </div>
          </Link>
          <Link href="/contact">
          <div className="flex h-40 w-40 items-center justify-center rounded-full bg-purple2 hover:bg-purple2/80">
            <p>Contact</p>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
