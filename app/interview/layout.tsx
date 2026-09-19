import type { ReactNode } from "react";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "採訪消息",
  description:
    "閱讀第二十六屆赤弦獎「跫聲」參賽者與音樂人的採訪故事，聽見民歌、木吉他演奏與音樂創作背後的聲音。",
  path: "/interview",
  keywords: ["赤弦獎採訪", "音樂人專訪", "木吉他演奏者", "民歌創作者"],
});

export default function InterviewLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return children;
}
