interface PageBannerProps {
  titleImage: string;
  titleAlt: string;
}

export default function PageBanner({ titleImage, titleAlt }: PageBannerProps) {
  return (
    <>
      <section
        className="flex aspect-[1024/350] w-full items-center justify-center bg-[length:100%_100%] bg-center bg-no-repeat pt-8"
        style={{
          backgroundImage: "url('/assets/page_banner_background.webp')",
        }}
      >
        <img
          className="w-[clamp(8rem,32vw,12rem)] md:w-[clamp(14rem,20vw,24rem)]"
          src={titleImage}
          alt={titleAlt}
          data-aos="fade-in"
        />
      </section>
      <div className="pointer-events-none h-8 w-full bg-gradient-to-b from-[#131224] to-[#131224]/0 md:h-32" />
    </>
  );
}
