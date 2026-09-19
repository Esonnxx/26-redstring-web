import type { Metadata } from "next";
import { Geist_Mono, Noto_Serif_TC } from "next/font/google";
import AOSInit from "@/components/AOSInit";
import Footer from "@/components/Footer";
import NavigationLoader from "@/components/NavigationLoader";
import SplashCursor from "@/components/SplashCursor";
import Header from "@/components/header";
import { metadataBase, siteKeywords, siteName } from "@/lib/seo";
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
  metadataBase,
  applicationName: siteName,
  title: {
    default: `${siteName}｜民歌與木吉他比賽`,
    template: `%s｜${siteName}`,
  },
  description:
    "第二十六屆赤弦獎「跫聲」官方網站，由國立臺北科技大學采音吉他社主辦，提供民歌比賽、木吉他比賽的報名資訊、賽程、團隊與活動消息。",
  keywords: siteKeywords,
  authors: [{ name: "國立臺北科技大學采音吉他社" }],
  creator: "國立臺北科技大學采音吉他社",
  publisher: "國立臺北科技大學采音吉他社",
  category: "music",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
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
    title: `${siteName}｜民歌與木吉他比賽`,
    description:
      "由國立臺北科技大學采音吉他社主辦的第二十六屆赤弦獎「跫聲」，邀請熱愛民歌、木吉他與音樂創作的學生站上舞台。",
    siteName,
    locale: "zh_TW",
    images: [
      {
        url: "/assets/home/home_banner.webp",
        width: 2880,
        height: 1730,
        alt: "第二十六屆赤弦獎「跫聲」民歌與木吉他比賽主視覺",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName}｜民歌與木吉他比賽`,
    description:
      "由國立臺北科技大學采音吉他社主辦的第二十六屆赤弦獎「跫聲」民歌與木吉他比賽。",
    images: ["/assets/home/home_banner.webp"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "國立臺北科技大學采音吉他社",
        alternateName: ["采音吉他社", "北科采音吉他社"],
        description:
          "第二十六屆赤弦獎「跫聲」民歌與木吉他比賽主辦單位，致力推廣校園音樂、木吉他演奏與音樂創作。",
        email: "ntutredstring@gmail.com",
        sameAs: [
          "https://www.instagram.com/tsaiyin_guitar/",
          "https://www.youtube.com/@ntut1272",
        ],
      },
      {
        "@type": "WebSite",
        name: siteName,
        alternateName: ["赤弦獎", "Red String"],
        description:
          "第二十六屆赤弦獎「跫聲」民歌與木吉他比賽官方網站。",
        inLanguage: "zh-Hant-TW",
      },
    ],
  };

  return (
    <html
      lang="zh-Hant"
      className={`${notoSerifTC.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <AOSInit />
        <SplashCursor />
        <Header />
        <NavigationLoader>{children}</NavigationLoader>
        <Footer />
      </body>
    </html>
  );
}
