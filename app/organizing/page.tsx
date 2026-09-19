import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "采音吉他社籌備團隊",
  description:
    "認識國立臺北科技大學采音吉他社籌辦第二十六屆赤弦獎「跫聲」民歌與木吉他比賽的團隊成員，包括總召、副召、公關、活動、報名、宣傳與美宣。",
  path: "/organizing",
  keywords: ["采音吉他社成員", "赤弦獎籌備團隊", "北科采音吉他社成員"],
});

const memberRows = [
  [
    { file: "member_01.png", role: "總召", name: "戴銘皜" },
    { file: "member_02.png", role: "副召", name: "張慧堉" },
  ],
  [
    { file: "member_03.png", role: "公關", name: "廖奕棋" },
    { file: "member_04.png", role: "公關", name: "彭揚詠" },
  ],
  [{ file: "member_05.png", role: "活動", name: "顏琬恩" }],
  [
    { file: "member_06.png", role: "報名", name: "李承恩" },
    { file: "member_07.png", role: "報名", name: "顏名萱" },
    { file: "member_08.png", role: "報名", name: "凃俊誠" },
  ],
  [
    { file: "member_09.png", role: "宣傳", name: "陳祐霖" },
    { file: "member_10.png", role: "宣傳、美宣", name: "游雅涵" },
  ],
  [{ file: "member_11.png", role: "美宣", name: "張筑媛" }],
];

interface MemberProps {
  file: string;
  role: string;
  name: string;
}

function Member({ file, role, name }: MemberProps) {
  return (
    <figure className="flex w-[clamp(7rem,14vw,10rem)] shrink-0 flex-col items-center text-center text-white">
      <Image
        src={`/assets/members/${file}`}
        alt={`采音吉他社第二十六屆赤弦獎籌備團隊${role} ${name}`}
        width={622}
        height={622}
        loading="eager"
        sizes="(max-width: 640px) 30vw, (max-width: 1024px) 14vw, 160px"
        className="h-auto w-full"
      />
      <figcaption className="mt-3">
        <p className="text-[14px] font-medium tracking-[2px]">{role}</p>
        <p className="mt-1 text-md font-medium tracking-[2px]">{name}</p>
      </figcaption>
    </figure>
  );
}

export default function Organizing() {
  return (
    <main className="min-h-screen">
      <PageBanner
        titleImage="/assets/organizing/title_organizing.webp"
        titleAlt="采音吉他社第二十六屆赤弦獎籌備團隊"
      />

      <section
        aria-label="國立臺北科技大學采音吉他社第二十六屆赤弦獎籌備團隊成員"
        className="mx-auto -mt-3 w-[min(100%-2rem,70rem)] pb-[clamp(5rem,10vw,9rem)] md:-mt-20 "
      >
        <div className="space-y-[clamp(4rem,8vw,8rem)]">
          {memberRows.map((row, index) => (
            <div
              key={index}
              className="flex flex-wrap justify-center gap-x-[clamp(2rem,12vw,12rem)] gap-y-12"
            >
              {row.map((member) => (
                <Member key={member.file} {...member} />
              ))}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
