"use client";

import { Label } from "@radix-ui/react-label";
import { useRef } from "react";
import Header from "~/components/header";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { toast } from "~/hooks/use-toast";

export default function HomePage() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLInputElement>(null);
  const handleSend = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const form = (e.target as HTMLButtonElement).form;
    if (form) {
      const name = (form[0] as HTMLInputElement).value;
      const email = (form[1] as HTMLInputElement).value;
      const message = (form[2] as HTMLInputElement).value;
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });
      if (response.ok) {
        toast({
          description: "送信されました！",
        });
        if (nameRef.current) nameRef.current.value = "";
          if (emailRef.current) emailRef.current.value = "";
          if (messageRef.current) messageRef.current.value = "";
      } else {
        toast({
          description: "送信に失敗しました。",
        });
      }
    }
  };

  return (
    <div>
      <div className="h-full w-full">
        <Header />
        <div className="px-8 pt-36 md:px-16">
          <p className="text-2xl text-purple2">Contact</p>
          <p>お問い合わせはこちらのフォームからお願いいたします。</p>
          <p>ご意見・ご感想など、なんでもお送りください。</p>
          <form className="mx-auto mt-8 max-w-[800px] space-y-6 rounded-lg bg-white p-6 shadow-md">
            <div className="flex flex-col space-y-2">
              <Label className="text-sm font-bold">お名前</Label>
              <Input
              ref={nameRef}
                type="text"
                placeholder="お名前を入力してください"
                className="bg-white"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Label className="text-sm font-bold">メールアドレス</Label>
              <Input
              ref={emailRef}
                type="email"
                placeholder="メールアドレスを入力してください"
                className="bg-white"
              />
            </div>
            <div className="flex flex-col space-y-2 pb-5">
              <Label className="text-sm font-bold">メッセージ</Label>
              <Input
                ref={messageRef} 
                type="text"
                placeholder="メッセージを入力してください"
                className="bg-white"
              />
            </div>
            <Button
              type="submit"
              className="w-full"
              onClick={handleSend}
            >
              送信する
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
