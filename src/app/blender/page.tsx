"use client";

import { useEffect, useState } from "react";
import BlenderCard from "~/components/blenderCard";
import Header from "~/components/header";

interface ApiData {
  contents: Blender[];
}

interface Blender {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  image: {
    url: string;
    height: number;
    width: number;
  };
  url: string;
  date: string;
  tag: string;
}

export default function HomePage() {
  const [blender, setBlender] = useState<Blender[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/microcms/blender");
      if (!res.ok) throw new Error("Failed to fetch blender");
      const data: ApiData = (await res.json()) as ApiData;
      setBlender(data.contents);
    }
    void fetchData();
  }, []);

  return (
    <div>
      <div className="h-full w-full">
        <Header />
        <div className="px-8 pt-36 md:px-16">
          <p className="text-2xl text-purple2">blender</p>
          <div className="mb-4">
            <p>2025/01/15～　チュートリアル中心です。</p>
          </div>
        </div>
        <div className="pb-10">
          <div className="flex flex-wrap justify-center">
            {blender.map((blender) => (
            <BlenderCard
              key={blender.id}
              image={blender.image.url}
              title={blender.title}
              tag={blender.tag}
              description={blender.url}
              date={blender.date}
            />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
