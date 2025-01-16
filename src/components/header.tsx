import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";

export default function Header() {
  return (
    <div className="fixed left-0 top-0 flex h-28 w-full items-center justify-between bg-white px-8 md:px-16">
      <Link href="/">
      <p className="hidden md:block text-purple2 text-3xl">かわせゆり　ポートフォリオサイト</p>
      <div className="block md:hidden text-purple2 text-3xl">
        <p>かわせゆり</p>
        <p>ポートフォリオサイト</p>
        </div>
      </Link>
      <Sheet>
        <SheetTrigger>
          <Image
            src="/Menu.png"
            alt="Menu"
            width={70}
            height={70}
            className=""
          />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
            </SheetTitle>
            <SheetDescription className="flex flex-col gap-y-5 text-center text-lg font-bold text-gray1">
              <Link href="/about" className="hover:text-gray1/80">自己紹介</Link>
              <Link href="/portfolio" className="hover:text-gray1/80">ポートフォリオ</Link>
              <Link href="/blender" className="hover:text-gray1/80">blender勉強広場</Link>
              <Link href="/contact" className="hover:text-gray1/80">お問い合わせ</Link>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
