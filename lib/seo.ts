import type { Metadata } from "next";

export const siteName = "第二十六屆赤弦獎「跫聲」";

const deploymentHost =
  process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;

export const metadataBase = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ??
    (deploymentHost ? `https://${deploymentHost}` : "http://localhost:3000"),
);

export const siteKeywords = [
  "第二十六屆赤弦獎",
  "第26屆赤弦獎",
  "赤弦獎",
  "跫聲",
  "Red String",
  "民歌比賽",
  "校園民歌比賽",
  "木吉他",
  "木吉他比賽",
  "吉他比賽",
  "大專民歌比賽",
  "高中民歌比賽",
  "采音吉他社",
  "北科采音吉他社",
  "國立臺北科技大學",
  "校園音樂",
  "音樂創作",
];

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
}: PageMetadataOptions): Metadata {
  const fullTitle = `${title}｜${siteName}`;

  return {
    title,
    description,
    keywords: [...new Set([...siteKeywords, ...keywords])],
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName,
      locale: "zh_TW",
      type: "website",
      images: [
        {
          url: "/assets/home/home_banner.webp",
          width: 2880,
          height: 1730,
          alt: `${siteName}民歌與木吉他比賽主視覺`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/assets/home/home_banner.webp"],
    },
  };
}
