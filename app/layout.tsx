import type { Metadata } from "next";
import { Geist_Mono, Noto_Serif_TC } from "next/font/google";
import AOSInit from "@/components/AOSInit";
import Footer from "@/components/Footer";
import NavigationLoader from "@/components/NavigationLoader";
import SplashCursor from "@/components/SplashCursor";
import Header from "@/components/header";
import "./globals.css";
import "aos/dist/aos.css";

const notoSerifTC = Noto_Serif_TC({
  variable: "--font-noto-serif-tc",
  weight: "variable",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "第二十六屆赤弦獎｜跫聲",
  description:
    "第二十六屆赤弦獎「跫聲」官方網站。由國立臺北科技大學采音吉他社主辦，邀請熱愛音樂的你以弦音留下獨一無二的跫聲。",
  keywords: [
    "第二十六屆赤弦獎",
    "赤弦獎",
    "跫聲",
    "Red String",
    "采音吉他社",
    "國立臺北科技大學",
    "吉他比賽",
    "校園音樂",
  ],
  authors: [{ name: "Tsaiyin_Guitar" }],
  creator: "國立臺北科技大學采音吉他社",
  publisher: "國立臺北科技大學采音吉他社",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/Logo.png", sizes: "16x16" },
      { url: "/Logo.png", sizes: "32x32" },
      { url: "/Logo.png", sizes: "64x64" },
    ],
    shortcut: "/favicon.ico",
    apple: "/Logo.png",
  },
  openGraph: {
    title: "第二十六屆赤弦獎｜跫聲",
    description:
      "第二十六屆赤弦獎「跫聲」官方網站，由國立臺北科技大學采音吉他社主辦。",
    siteName: "第二十六屆赤弦獎｜跫聲",
    locale: "zh_TW",
    images: [
      {
        url: "/assets/home/home_banner.webp",
        width: 2880,
        height: 1730,
        alt: "第二十六屆赤弦獎「跫聲」主視覺",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "第二十六屆赤弦獎｜跫聲",
    description:
      "第二十六屆赤弦獎「跫聲」官方網站，由國立臺北科技大學采音吉他社主辦。",
    images: ["/assets/home/home_banner.webp"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="zh-Hant"
      className={`${notoSerifTC.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        <AOSInit />
        <SplashCursor />
        <Header />
        <NavigationLoader>{children}</NavigationLoader>
        <Footer />
      </body>
    </html>
  );
}
