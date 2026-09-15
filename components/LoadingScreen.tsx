import Waves from "@/components/home/Waves";

export default function LoadingScreen() {
  return (
    <main
      aria-label="頁面載入中"
      className="fixed inset-0 z-[100] flex min-h-screen items-center justify-center overflow-hidden bg-[var(--background)] bg-top bg-[length:100%_auto] bg-repeat-y"
      style={{
        backgroundImage: "url('/assets/background.webp')",
      }}
    >
      <div className="pointer-events-none absolute inset-0">
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
      </div>

      <div className="relative z-10 flex flex-col items-center gap-2 sm:gap-4">
        <img
          src="/assets/home/banner_title_01.webp"
          alt=""
          aria-hidden="true"
          className="w-[clamp(8rem,24vw,12rem)]"
        />
        <img
          src="/assets/home/banner_title_02.webp"
          alt=""
          aria-hidden="true"
          className="w-[clamp(8rem,24vw,12rem)]"
        />
        <p className="mt-4 text-xl tracking-[0.25em] text-white [text-shadow:0_0_4px_rgba(255,255,255,0.5),0_0_12px_rgba(255,255,255,0.45)] sm:mt-6 sm:text-2xl">
          LOADING...
        </p>
      </div>
    </main>
  );
}
