import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { Toaster } from "~/components/ui/toaster";

export const metadata: Metadata = {
  title: "Yuri Kawase's Portfolio Site",
  description: "川瀬友里のポートフォリオサイトです。",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className={`${GeistSans.variable}`}>
      <body className="h-screen w-screen bg-purple1 text-gray1">{children}
      <Toaster />
      </body>
    </html>
  );
}
