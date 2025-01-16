"use client";

import Image from "next/image";
import Header from "~/components/header";

export default function HomePage() {
  return (
    <div>
      <div className="h-full w-full">
        <Header />
        <div className="pt-36 px-8 md:px-16">
        <p className="text-purple2 text-2xl">About</p>
        <p className="mb-10">自己紹介です。</p>
          <div className="flex justify-center flex-wrap gap-5">
          <Image
            src="/Icon.jpg"
            alt="Icon"
            width={200}
            height={200}
            className="rounded-full"
          />
          <div className="w-full max-w-[800px] bg-white p-8 rounded-lg shadow-md">
            <p className="break-words">
                はじめまして！<br/>
                東京電機大学 未来科学部 情報メディア学科3年 川瀬友里（かわせゆり）です。
                埼玉県出身です。ソフトウェア研究部に所属しています。ドーナツ屋でアルバイトをしています。
                小学4年～高校3年まで吹奏楽部に所属し、トランペットを3年間とクラリネットを6年間していました。
                大学1年春～Javaに触れ、大学2年冬～独学でWeb開発全般を学んでいます。
                現在は、ハッカソンなどの技術系イベントに参加したり、
                授業内でWebアプリを開発したりしています。

            </p>
          </div>
          </div>
      </div>
      <div className="my-10 px-8 md:px-16 pb-10">
      <p className="text-purple2 text-2xl">Skill</p>
      <p className="mb-10">技術紹介です。一度でも触れたことがある技術を載せています。</p>
          <div>
          <div className="flex flex-wrap justify-center gap-5">
            <div className="w-[500px] bg-white p-8 rounded-lg shadow-md">
              <div className="w-fit border border-purple2 px-5 py-2 rounded-md mb-5">
              <p className="text-purple2 font-bold">
                  frontend
              </p>
              </div>
              <div className="">
              <p>・HTML / CSS</p>
              <p>・Tailwind CSS</p>
              <p>・JavaScript</p>
              <p>・TypeScript</p>
              <p>・React</p>
              <p>・Next.js</p>
              <p>・Three.js</p>
              <p>・React Three Fiber</p>
              <p>・shadcn/ui</p>
              <p>・Material UI</p>
              <p>・Chakra UI</p>
              <p>・Yamada UI　他</p>
              </div>
            </div>
            <div className="w-[500px] bg-white p-8 rounded-lg shadow-md">
              <div className="w-fit border border-purple2 px-5 py-2 rounded-md mb-5">
              <p className="text-purple2 font-bold">
                  backend
              </p>
              </div>
              <div className="">
              <p>・Java</p>
              <p>・Python</p>
              <p>・JavaScript</p>
              <p>・TypeScript</p>
              <p>・Express　他</p>
              </div>
            </div>
            <div className="w-[500px] bg-white p-8 rounded-lg shadow-md">
              <div className="w-fit border border-purple2 px-5 py-2 rounded-md mb-5">
              <p className="text-purple2 font-bold">
                  others
              </p>
              </div>
              <div className="">
              <p>・Github</p>
              <p>・LINE Messaging API</p>
              <p>・Discord Bot</p>
              <p>・Spotify API</p>
              <p>・Youtube Data API</p>
              <p>・Google Apps Script</p>
              <p>・Google Colab</p>
              <p>・Figma</p>
              <p>・Slack</p>
              <p>・Linux（WSL）</p>
              <p>・Ubuntu</p>
              <p>・（Docker）</p>
              <p>・Arduino</p>
              <p>・M5Stack core2</p>
              <p>・vsCode</p>
              <p>・Eclipse　他</p>
              </div>
            </div>
          </div>
          </div>
      </div>
     </div>
    </div>
  );
}
