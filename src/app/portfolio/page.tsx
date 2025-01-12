"use client";

import Image from "next/image";
import Header from "~/components/header";
import PortfolioCard from "~/components/portfolioCard";
import { Badge } from "~/components/ui/badge";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";

export default function HomePage() {
  return (
    <div>
      <div className="h-full w-full">
        <Header />
        <div className="px-8 pt-36 md:px-16">
          <p className="text-2xl text-purple2">Portfolio</p>
          <div className="mb-8">
            <p>今まで制作してきたものを集めました。</p>
            <p>詳細は今後公開予定です。検索機能は未実装です。（2024/01/12時点）</p>
          </div>
          <s><div className="mb-3 flex w-full items-center space-x-2">
            <Image
              src="/Search.png"
              alt="Search"
              width={35}
              height={35}
              className=""
            />
            <Input
              type="text"
              placeholder="キーワードを入力してください"
              className="max-w-96 bg-white"
            />
          </div>
          <div className="flex flex-col flex-wrap md:flex-row md:gap-x-10">
            <div className="my-3 flex flex-col space-y-3">
              <RadioGroup defaultValue="default" className="flex space-x-3">
                <div className="flex items-center space-x-1">
                  <RadioGroupItem value="default" id="default" />
                  <Label htmlFor="default">デフォルト</Label>
                </div>
                <div className="flex items-center space-x-1">
                  <RadioGroupItem value="update" id="update" />
                  <Label htmlFor="update">更新日</Label>
                </div>
                <div className="flex items-center space-x-1">
                  <RadioGroupItem value="category" id="category" />
                  <Label htmlFor="category">カテゴリ別</Label>
                </div>
              </RadioGroup>
              <RadioGroup defaultValue="desc" className="flex space-x-3">
                <div className="flex items-center space-x-1">
                  <RadioGroupItem value="desc" id="default" />
                  <Label htmlFor="desc">降順</Label>
                </div>
                <div className="flex items-center space-x-1">
                  <RadioGroupItem value="asc" id="update" />
                  <Label htmlFor="asc">昇順</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="my-3 flex w-full flex-wrap gap-2">
              <Badge className="flex items-center hover:bg-purple2/80">React</Badge>
              <Badge className="flex items-center hover:bg-purple2/80">Next.js</Badge>
              <Badge className="flex items-center hover:bg-purple2/80">Java</Badge>
              <Badge className="flex items-center hover:bg-purple2/80">Arduino</Badge>
              <Badge className="flex items-center hover:bg-purple2/80">M5Stack Core2</Badge>
              <Badge className="flex items-center hover:bg-purple2/80">R3F</Badge>
            </div>
          </div>
          </s>
        </div>
        <div className="pb-10">
          <p className="mt-10 px-8 md:px-16">検索結果 : 7件</p>
          <div className="flex flex-wrap justify-center">
            <PortfolioCard
              image="/CakeCrafter.png"
              title="Cake Crafter"
              description="3Dモデルを組み合わせてオリジナルケーキを作ろう！作ったケーキは共有URLで友達に送ろう！※本アプリはPCのみで動作します。"
              date="最終更新 2024/01/12"
            />
            <PortfolioCard
              image="/ChatDiary.png"
              title="Chat Diary"
              description="AI搭載の日記アプリです。日々の出来事を送信すると、友達と話しているような感覚でAIが質問を返してくれ、自動で日記を生成してくれます。"
              date="最終更新 2024/01/12"
            />
            <PortfolioCard
              image="/HomeParty.png"
              title="ほーむぱーちぃ"
              description="通話をより楽しくさせるパーティーアプリです。Discordに対応しています。乾杯機能、掲示板、ルーレット、ペイント等の機能を実装しています。"
              date="最終更新 2024/01/12"
            />
            <PortfolioCard
              image="/HandMotion.png"
              title="手の動きで音楽を奏でるアプリ"
              description="超音波センサで手とセンサの距離を計測し、距離に応じてスピーカーから出る音を変えられます。簡単なゲームアプリも実装しています。"
              date="最終更新 2024/01/12"
            />
            <PortfolioCard
              image="/MusicRecommend.png"
              title="楽曲推薦アプリ"
              description="好きなアーティストに応じて楽曲を推薦するマッシュアップアプリです。好きなアーティストを入力すると、類似アーティストの人気楽曲を返してくれます。"
              date="最終更新 2024/01/12"
            />
            <PortfolioCard
              image="/ScheduleShare.png"
              title="予定共有アプリ"
              description="友達と遊びの予定を立てやすくするアプリです。予定の空き状況を可視化し、アプリ内で新たなイベントを作成することができます。"
              date="最終更新 2024/01/12"
            />
            <PortfolioCard
              image="/FightBox.png"
              title="がんばりBOX"
              description="目標を周りに宣言することで、お互いに励まし合いながら目標達成に向けて頑張れるアプリです。2024年5月開催のハッカソンで開発しました。"
              date="最終更新 2024/01/12"
            />
              <PortfolioCard
              image="/CakeCrafter.png"
              title="Product Name"
              description="Descriptionxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
              date="最終更新 20xx/xx/xx"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
