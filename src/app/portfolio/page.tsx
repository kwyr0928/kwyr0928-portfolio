"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Header from "~/components/header";
import PortfolioCard from "~/components/portfolioCard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";

interface ApiData {
  contents: Portfolio[];
}

interface Portfolio {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  description: string;
  image: {
    url: string;
    height: number;
    width: number;
  };
  tags: string[];
  date: string;
  github: string;
  slide: string;
  deploy: string;
  people: number;
  skill: string;
  function: string;
  point: string;
}

export default function HomePage() {
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/microcms/portfolios");
      if (!res.ok) throw new Error("Failed to fetch portfolios");
      const data: ApiData = (await res.json()) as ApiData;
      setPortfolios(data.contents);
      console.log(data.contents);
    }
    void fetchData();
  }, []);

  return (
    <div>
      <div className="h-full w-full">
        <Header />
        <div className="px-8 pt-36 md:px-16">
          <p className="text-2xl text-purple2">Portfolio</p>
          <div className="mb-4">
            <p>制作物を紹介します。</p>
          </div>
        </div>
        <div className="pb-10">
          <div className="flex flex-wrap justify-center">
            {portfolios.map((portfolio) => (
              <Dialog key={portfolio.id}>
                <DialogTrigger>
                  <PortfolioCard
                    image={portfolio.image.url}
                    title={portfolio.title}
                    description={portfolio.description}
                    date={portfolio.date}
                  />
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>
                      <p className="text-2xl text-left">{portfolio.title}</p>
                        <Image
                          src={portfolio.image.url}
                          alt={portfolio.title}
                          width={500}
                          height={500}
                          className="mx-auto my-5"
                        />
                    </DialogTitle>
                    <DialogDescription className="text-sm text-left">
                        概要：<span className="font-bold">{portfolio.description}</span>
                        <br />
                        開発人数：<span className="font-bold">{portfolio.people}人</span>
                        <br />
                        開発期間：<span className="font-bold">{portfolio.date}</span>
                        <br />
                        使用技術：<span className="font-bold">{portfolio.skill}</span>
                        <br />
                        機能：<span className="font-bold" dangerouslySetInnerHTML={{ __html: portfolio.function }} />
                        こだわった点：<span className="font-bold" dangerouslySetInnerHTML={{ __html: portfolio.point }} />
                        GithubURL：<span className="text-blue-600 hover:underline break-all" dangerouslySetInnerHTML={{ __html: portfolio.github }} />
                        説明資料：<span className="text-blue-600 hover:underline break-all" dangerouslySetInnerHTML={{ __html: portfolio.slide }} />
                        公開先URL：<span className="text-blue-600 hover:underline break-all" dangerouslySetInnerHTML={{ __html: portfolio.deploy }} />
                        その他参考：
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}