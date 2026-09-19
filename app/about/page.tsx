import PageBanner from "@/components/PageBanner";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "關於赤弦獎與采音吉他社",
  description:
    "認識第二十六屆赤弦獎「跫聲」的民歌比賽理念與發展歷程，以及主辦單位國立臺北科技大學采音吉他社如何推廣木吉他與校園音樂。",
  path: "/about",
  keywords: ["赤弦獎介紹", "采音吉他社介紹", "紅樓琴緣民歌比賽"],
});

export default function About() {
  return (
    <main className="min-h-screen">
      <PageBanner
        titleImage="/assets/about/title_about.webp"
        titleAlt="關於第二十六屆赤弦獎與采音吉他社"
      />

      <section
        aria-labelledby="about-section-01-title"
        data-aos="fade-in"
        className="relative z-10 -mt-20 overflow-hidden px-[5%] pb-16 pt-12 text-white md:-mt-24 md:pb-24 md:pt-8"
      >
        <div className="mx-auto flex w-full flex-col items-center">
          <div className="relative flex w-full items-center justify-center py-4 md:py-6">
            <img
              src="/assets/about/about_decorate_left.webp"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute left-0 top-1/2 z-0 w-[30%] -translate-y-1/4 lg:left-11"
            />
            <h2
              id="about-section-01-title"
              className="relative z-10 whitespace-nowrap text-center tracking-[5px] text-[clamp(20px,2.2vw,30px)] font-bold leading-tight [text-shadow:0_0_2px_rgba(255,255,255,0.9),0_0_16px_rgba(255,255,255,0.55)]"
            >
              墨海無聲，跫聲獨響
            </h2>
            <img
              src="/assets/about/about_decorate_right.webp"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute right-0 top-1/2 z-0 w-[30%] -translate-y-1/4 lg:right-11"
            />
          </div>

          <div className="mt-8 w-full max-w-[1440px] text-center text-[16px] leading-[2.15] [text-shadow:0_0_5px_rgba(255,255,255,0.75),0_0_14px_rgba(255,255,255,0.35)] md:mt-10 md:leading-[2.35]">
            <p>
              當世界過於擁擠，我們在喧囂的浪沫裡，丟失了感知自我的靈敏。
              <br />
              於是，我們選擇向內溯航，潛入那片如墨色般沈靜的海。在那裡，繁華如泡沫瞬息明滅，所有的色彩與浮躁，最終都隱入萬丈深淵的漆黑之中。
            </p>

            <p className="mt-8 md:mt-6">
              那是上一場無聲的洗禮，讓我們學會了在靜謐中留白。
            </p>

            <p className="mt-8 md:mt-6">
              而今，感官的邊界已然模糊，唯有那撥弄弦線的指尖，如同踏在靈魂荒原上的跫聲，成了天地間唯一的絕響。
              <br />
              這並非孤寂的悲鳴，而是一種極致的純粹，在墨色的深處，水壓濾去了成敗，也洗淨了眼光，讓我們終於能聽見那個不因世界起伏的頻率。
            </p>

            <p className="mt-8 md:mt-6">
              每一聲扣擊琴身的清響，都是一次與靈魂最深處的重逢。這份孤獨而堅定的節奏，在萬籟俱寂的航道上，聽憑弦音迴盪。
              <br />
              我們在無聲的海，寫下了最真實的、屬於自我的聲音。
            </p>
          </div>

          <img
            src="/assets/about/about_decorate_buttom.webp"
            alt=""
            aria-hidden="true"
            className="pointer-events-none mt-8 w-[92%] md:mt-4 md:w-[72%]"
          />
        </div>
      </section>

      <section
        id="red-string-purpose"
        aria-labelledby="about-section-02-title"
        data-aos="fade-up"
        className="relative scroll-mt-8 overflow-hidden bg-black/45 pb-14 text-white md:px-[11.5%] md:py-16"
      >
        <img
          src="/assets/about/about_02_img.webp"
          alt="第二十六屆赤弦獎民歌與木吉他比賽演奏者"
          className="relative z-10 mb-10 block h-[55vw] max-h-[360px] w-full object-cover md:absolute md:inset-y-0 md:right-0 md:mb-0 md:h-full md:max-h-none md:w-[37%]"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 18%, black 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 18%, black 100%)",
          }}
        />
        <div className="relative z-10 w-full md:w-[62%]">
          <h2
            id="about-section-02-title"
            className="px-6 text-[24px] font-bold leading-tight [text-shadow:0_0_2px_rgba(255,255,255,0.45),0_0_8px_rgba(255,255,255,0.2)] md:px-0 md:text-[32px]"
          >
            赤弦宗旨
          </h2>

          <div className="mt-8 px-6 text-[16px] leading-[2.2] tracking-widest [text-shadow:0_0_2px_rgba(255,255,255,0.45),0_0_8px_rgba(255,255,255,0.2)] md:mt-4 md:px-0 md:leading-[1.9]">
            <p>
              「赤弦獎--紅樓琴緣民歌比賽」是采音吉他社最為重要且盛大的活動，自民國
              90
              年開始舉辦，至今即將進入第二十六屆。初期是以舉辦給北科學生參賽為主，經由多屆的比賽累積活動經驗及檢討，嘗試於第七屆擴大賽事，廣集新竹以北之各大專院校之參賽者共襄盛舉，於第八屆將賽事擴大至全國大專院校及北部高中職，第十三屆增加演奏組，第十四屆更是新增音樂節活動，邀請十三屆得獎人為我們表演，並於第十八屆將賽事更擴大至全國大專院校及全國高中職。
            </p>

            <p className="mt-6">
              希望透過赤弦獎這個比賽，讓參賽者能夠不僅保有赤子之心，還能實踐對音樂的熱愛，在求學生涯中能有機會展現自我，並於賽事中發掘人才，提升國內的音樂素質。
            </p>

            <p className="mt-6">
              赤弦獎的目標及理念，即為推廣校園音樂風氣，讓對音樂表演有興趣的學生有展現自我的機會，且藉由校際間的競賽，達到交流學習的效果。本屆目標是希望讓參賽者的音樂、作品能夠被更多人聽見，於是積極尋求與音樂平台合作，藉以鼓勵參賽者創作及比賽。
            </p>
          </div>
        </div>
      </section>

      <section
        id="about-tsaiyin"
        aria-labelledby="about-section-03-title"
        data-aos="fade-up"
        className="scroll-mt-8 px-0 py-16 text-white md:px-[11.5%] md:py-14"
      >
        <div className="mx-auto flex w-full flex-col items-center">
          <h2
            id="about-section-03-title"
            className="px-6 text-center text-[24px] font-bold leading-tight [text-shadow:0_0_2px_rgba(255,255,255,0.45),0_0_8px_rgba(255,255,255,0.2)] md:px-0 md:text-[32px]"
          >
            關於采音
          </h2>

          <p className="mt-8 w-full max-w-[1440px] px-6 text-center text-[16px] leading-[2.2] tracking-widest [text-shadow:0_0_2px_rgba(255,255,255,0.45),0_0_8px_rgba(255,255,255,0.2)] md:mt-10 md:px-0 md:leading-[1.9]">
            采音吉他社，為國立臺北科技大學的音樂性社團，有來自各大專院校的學生參與，專注於音樂能力的提升和音樂表演的多樣性。涵蓋多種曲風，包括木歌和團歌，幫助社員掌握優秀的音樂技巧和表演方法。且社團也積極舉辦各類音樂活動，促進社員間的交流與合作。也協助學校籌辦赤弦獎，為音樂愛好者提供展現才華的舞台。
          </p>

          <div className="mt-12 grid w-full max-w-[720px] grid-cols-1 gap-12 sm:grid-cols-2 md:mt-16 md:gap-20">
            <a
              href="https://youtube.com/channel/UCEiFrhE7QP95hR-JoMxtwDw?si=6MD_jhx0QLqXa0Qg"
              target="_blank"
              rel="noreferrer"
              className="flex justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <figure className="flex flex-col items-center text-center">
                <img
                  src="/assets/tsaiyin_logo.webp"
                  alt="采音吉他社 YouTube 頻道"
                  className="w-[clamp(9rem,16vw,12rem)] transition-transform duration-300 hover:scale-105"
                />
                <figcaption className="mt-5 text-[18px] font-semibold [text-shadow:0_0_2px_rgba(255,255,255,0.45),0_0_8px_rgba(255,255,255,0.2)]">
                  采光影像
                </figcaption>
              </figure>
            </a>

            <a
              href="https://www.instagram.com/tsaiyin_guitar/"
              target="_blank"
              rel="noreferrer"
              className="flex justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <figure className="flex flex-col items-center text-center">
                <img
                  src="/assets/TSAIYIN_LOGO.png"
                  alt="采音吉他社 Instagram"
                  className="w-[clamp(9rem,16vw,12rem)] transition-transform duration-300 hover:scale-105"
                />
                <figcaption className="mt-5 text-[18px] font-semibold [text-shadow:0_0_2px_rgba(255,255,255,0.45),0_0_8px_rgba(255,255,255,0.2)]">
                  采音IG
                </figcaption>
              </figure>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
