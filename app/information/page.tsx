import PageBanner from "@/components/PageBanner";
import Button from "@/components/Button";
import RegisterSwiper from "@/components/information/RegisterSwiper";
import Image from "next/image";
import transportation01 from "@/components/information/transportation_01.webp";
import transportation02 from "@/components/information/transportation_02.webp";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "比賽須知與報名資訊",
  description:
    "查詢第二十六屆赤弦獎「跫聲」民歌與木吉他比賽的參賽簡章、初賽報名須知、報名流程、比賽地點與交通資訊。",
  path: "/information",
  keywords: ["赤弦獎報名", "赤弦獎簡章", "民歌比賽報名", "木吉他比賽報名"],
});

const downloads = [
  {
    title: "第二十六屆赤弦獎參賽簡章",
    href: "/assets/第二十六屆赤弦獎參賽簡章.pdf",
  },
  {
    title: "第二十六屆赤弦獎初賽報名須知",
    href: "/assets/第二十六屆赤弦獎初賽報名須知.pdf",
  },
];

export default function Information() {
  return (
    <main className="min-h-screen">
      <PageBanner
        titleImage="/assets/information/title_information.webp"
        titleAlt="第二十六屆赤弦獎民歌與木吉他比賽須知"
      />

      <section
        aria-labelledby="information-section-01-title"
        className="px-[5%] -mt-20  py-10 text-white md:px-[8%] md:py-1"
      >
        <h2 id="information-section-01-title" className="sr-only">
          下載比賽資料
        </h2>

        <div className="mx-auto grid w-full gap-10 max-w-[1440px] grid-cols-1 md:grid-cols-2">
          {downloads.map((item) => (
            <article
              key={item.title}
              className="relative flex flex-col items-center justify-center gap-7 px-[16%] py-[8%] text-center md:px-[14%] md:py-[8%]"
            >
              <img
                src="/assets/information/decorator_left.webp"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 left-0 h-full w-auto"
              />
              <img
                src="/assets/information/decorator_right.webp"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 right-0 h-full w-auto"
              />

              <h3 className="bg-gradient-to-r from-[#D1D1D1] via-white to-[#D1D1D1] bg-clip-text text-[20px] leading-tight text-transparent drop-shadow-[0_0_4px_rgba(255,255,255,0.35)]">
                {item.title}
              </h3>

              <Button href={item.href} download className="text-[20px]">
                點擊下載
              </Button>
            </article>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="information-section-02-title"
        className="px-[5%] py-14 text-white md:py-28"
      >
        <h2
          id="information-section-02-title"
          className="text-center text-[24px] font-bold leading-tight"
        >
          報名流程
        </h2>

        <RegisterSwiper />

        <div className="mt-10 flex justify-center md:mt-14">
          <Button
            href="https://line.me/R/ti/p/11FZvoRuwx"
            target="_blank"
            rel="noreferrer"
          >
            報名連結
          </Button>
        </div>
      </section>

      <section
        aria-labelledby="information-section-03-title"
        className="px-[5%] py-14 text-white md:py-1 md:pb-20"
      >
        <h2
          id="information-section-03-title"
          className="text-center text-[24px] font-bold leading-tight"
        >
          交通方式
        </h2>

        <div className="mx-auto mt-10 grid w-full max-w-[1440px] grid-cols-1 gap-6 md:mt-14 md:grid-cols-2 md:gap-[2%]">
          <div className="overflow-hidden">
            <Image
              src={transportation01}
              alt="前往第二十六屆赤弦獎比賽會場的臺北科技大學忠孝門路線"
              className="h-auto w-full"
              loading="eager"
              sizes="(min-width: 768px) 45vw, 90vw"
            />
          </div>
          <div className="overflow-hidden">
            <Image
              src={transportation02}
              alt="前往第二十六屆赤弦獎比賽會場的臺北科技大學新生門路線"
              className="h-auto w-full"
              loading="eager"
              sizes="(min-width: 768px) 45vw, 90vw"
            />
          </div>
        </div>

        <div className="mx-auto mt-10 flex w-full max-w-[720px] flex-col items-center text-center md:mt-14">
          <h3 className="text-[20px] font-bold leading-tight">❙ 初賽地點 ❙</h3>
          <p className="mt-3 text-[18px] leading-relaxed">
            臺北科技大學 學生活動中心一樓 大禮堂
          </p>

          <h3 className="mt-8 text-[20px] font-bold leading-tight">
            ❙ 詳細地址 ❙
          </h3>
          <p className="mt-3 text-[18px] leading-relaxed">
            台北市大安區忠孝東路三段一號
          </p>
        </div>

        <div className="mt-10 flex justify-center md:mt-14">
          <Button
            href="https://www.youtube.com/watch?v=NVNC1BzmDE8"
            target="_blank"
            rel="noreferrer"
          >
            交通影片
          </Button>
        </div>
      </section>
    </main>
  );
}
