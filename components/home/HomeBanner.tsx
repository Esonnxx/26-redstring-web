import Waves from "@/components/home/Waves";

export default function HomeBanner() {
  return (
    <section
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat text-white max-[600px]:min-h-[max(48rem,112svh)] min-[601px]:max-lg:min-h-[clamp(45rem,65vw,60rem)]"
      style={{ backgroundImage: "url('/assets/home/home_banner.webp')" }}
      data-aos="fade"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-40 bg-gradient-to-b from-[#131224] to-[#131224]/0" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-48 bg-gradient-to-t from-[#131224] to-[#131224]/0" />

      <Waves
        className="pointer-events-none z-[1]"
        lineColor="rgba(255, 255, 255, 0.1)"
        backgroundColor="transparent"
        waveSpeedY={0.2}
        waveAmpX={55}
        waveAmpY={5}
        friction={0.57}
        tension={0.001}
        maxCursorMove={20}
        xGap={6}
        yGap={8}
        waveSpeedX={0.015}
      />

      <div className="absolute inset-x-0 top-[clamp(9rem,17vw,10rem)] z-10 flex justify-center">
        <p className="-mr-5 text-[20px] tracking-[40px]">赤弦獎</p>
      </div>

      <div className="flex translate-y-[clamp(2rem,8vh,5rem)] items-center justify-center">
        <div className="relative flex h-[min(100vw,620px)] w-full items-center justify-center max-[600px]:flex-col md:h-[min(80vw,58vh,620px)] md:w-[min(95vw,78vh,900px)] lg:h-[min(68vw,58vh,620px)] lg:w-[min(78vw,78vh,900px)]">
          <img
            className="banner-title-float-one relative z-10 w-[45%] max-[600px]:w-[45%] md:w-[70%] lg:w-[67%]"
            src="/assets/home/banner_title_01.webp"
            alt="赤"
          />
          <img
            className="banner-title-float-two relative z-0 -ml-[12%] w-[45%] opacity-90 max-[600px]:ml-0 max-[600px]:w-[45%] md:-ml-[14%] md:w-[70%] lg:-ml-[12%] lg:w-[67%]"
            src="/assets/home/banner_title_02.webp"
            alt="弦"
          />
        </div>
      </div>

      <div className="-mr-5 absolute tracking-[40px] bottom-[7%] z-10 text-center text-[17px] leading-relaxed">
        <p className="-mr-5">｜跫聲｜</p>
        <p className="tracking-[1rem] pt-3">26th Red String</p>
      </div>
    </section>
  );
}
