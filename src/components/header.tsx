import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";

export default function Header() {
  return (
    <div className="fixed left-0 top-0 flex h-28 w-full items-center justify-between bg-white px-8 md:px-16">
      <Link href="/">
      <p className="hidden md:block text-purple2 text-3xl">Yuri Kawase&apos;s Portfolio Site</p>
      <div className="block md:hidden text-purple2 text-3xl">
        <p>Yuri Kawase&apos;s</p>
        <p>Portfolio Site</p>
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
            <SheetTitle className="mb-6 text-center text-gray1">
              メニュー
            </SheetTitle>
            <SheetDescription className="flex flex-col gap-y-5 text-center text-xl font-bold text-gray1">
              <Link href="/" className="hover:text-gray1/80">Home</Link>
              <Link href="/about" className="hover:text-gray1/80">About</Link>
              <Link href="/portfolio" className="hover:text-gray1/80">Portfolio</Link>
              <Link href="/contact" className="hover:text-gray1/80">Contact</Link>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
