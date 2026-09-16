interface PageBannerProps {
  titleImage?: string;
  titleAlt?: string;
  title?: string;
}

export default function PageBanner({
  titleImage,
  titleAlt,
  title,
}: PageBannerProps) {
  return (
    <>
      <section
        className="flex aspect-[1024/600] w-full items-center justify-center bg-[length:100%_100%] bg-center bg-no-repeat pt-8 md:aspect-[1024/350]"
        style={{
          backgroundImage: "url('/assets/page_banner_background.webp')",
        }}
      >
        {titleImage ? (
          <img
            className="w-[clamp(8rem,32vw,12rem)] md:w-[clamp(14rem,20vw,24rem)]"
            src={titleImage}
            alt={titleAlt ?? ""}
            data-aos="fade-in"
          />
        ) : (
          <h1
            className="text-center text-[clamp(1.75rem,5vw,3.5rem)] font-bold tracking-[0.35em] text-white [text-shadow:0_0_6px_rgba(255,255,255,0.65),0_0_20px_rgba(255,255,255,0.35)]"
            data-aos="fade-in"
          >
            {title}
          </h1>
        )}
      </section>
      <div className="pointer-events-none h-8 w-full bg-gradient-to-b from-[#131224] to-[#131224]/0 md:h-32" />
    </>
  );
}
