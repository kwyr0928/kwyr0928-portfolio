"use client";

import Header from "~/components/header";

export default function HomePage() {

  return (
    <div>
      <div className="h-full w-full">
        <Header />
        <div className="px-8 pt-36 md:px-16">
          <p>このページは、今後更新予定です。</p>
        </div>
      </div>
    </div>
  );
}
