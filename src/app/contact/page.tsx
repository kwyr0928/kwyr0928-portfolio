"use client";

import { Label } from "@radix-ui/react-label";
import Header from "~/components/header";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { toast } from "~/hooks/use-toast";

export default function HomePage() {
  return (
    <div>
      <div className="h-full w-full">
        <Header />
        <div className="pt-36 px-8 md:px-16">
        <p className="text-purple2 text-2xl">Contact</p>
          <p>お問い合わせはこちらのフォームからお願いいたします。</p>
          <p><s>ご意見・ご感想など、なんでもお送りください。</s> 送信機能は未実装です。（2024/01/12時点）</p>
          <form className="mx-auto mt-8 max-w-[800px] space-y-6 rounded-lg bg-white p-6 shadow-md">
            <div className="flex flex-col space-y-2">
              <Label className="text-sm font-bold">お名前</Label>
              <Input
                type="text"
                placeholder="お名前を入力してください"
                className="bg-white"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Label className="text-sm font-bold">メールアドレス</Label>
              <Input
                type="email"
                placeholder="メールアドレスを入力してください"
                className="bg-white"
              />
            </div>
            <div className="flex flex-col space-y-2 pb-5">
              <Label className="text-sm font-bold">メッセージ</Label>
              <Input
                type="text"
                placeholder="メッセージを入力してください"
                className="bg-white"
              />
            </div>
            <Button
              type="submit"
              className="w-full"
              onClick={(e) => {
                e.preventDefault();
                toast({
                  description: "送信しました！",
                });
              }}
            >
              送信する
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
