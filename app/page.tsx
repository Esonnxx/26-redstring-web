import HomeBanner from "@/components/home/HomeBanner"; // import { ButtonSwitchPage } from "./globals/button_style";
import Button from "@/components/Button";
// import Loading from "./loading";

interface HomeProps {
  image: string;
  title: string;
  type: string;
  date: string;
}

export default function Home() {
  return (
    <div>
      <div>
        <div>
          {/* <Loading /> */}
          <HomeBanner />
        </div>
        <div className="relative pt-[10%] max-m_md:pt-[15%] max-sm:pt-[15%]">
          <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-24 bg-gradient-to-b from-[#131224] to-[#131224]/0" />
          <div className="relative z-10">
            <Section01 />
            <Section02 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Section01() {
  const infoList: HomeProps[] = [
    {
      image: "/assets/home/home_img_01.webp",
      title: "O1",
      type: "初賽",
      date: "11/21~11/22",
    },
    {
      image: "/assets/home/home_img_02.webp",
      title: "O2",
      type: "決賽",
      date: "12/26",
    },
  ];

  const venue = "國立臺北科技大學 學生活動中心 大禮堂";

  return (
    <div className="mx-auto w-full  space-y-[7vw] pt-[1%] max-md:space-y-16 max-md:pt-[0%]">
      {infoList.map((item, index) => (
        <div
          key={item.title}
          data-aos="fade-up"
          className={`flex flex-col items-center gap-6 md:flex-row md:gap-4 ${
            index % 2 ? "md:flex-row-reverse" : ""
          }`}
        >
          <img
            className="w-full md:w-[50%]"
            src={item.image}
            alt={`${item.type}演出照片`}
          />
          <div className="relative flex w-full items-center justify-center gap-5 px-6 md:w-[36%] md:justify-start md:px-0">
            <img
              className="pointer-events-none absolute left-0 top-2 w-[45%] z-0 -translate-y-1/2"
              src={`/assets/home/${item.title}.svg`}
              alt=""
              aria-hidden="true"
            />
            <div className="relative z-10 shrink-0">
              <h3 className="w-[1em] text-4xl px-2 leading-14 font-bold text-white [text-shadow:0_0_5px_rgba(255,255,255,0.9),0_0_18px_rgba(255,255,255,0.45)] max-lg:text-4xl max-lg:leading-12">
                {item.type}
              </h3>
            </div>
            <div className="relative z-10 text-white">
              <p className="text-2xl tracking-wide max-md:text-xl">
                {item.date}
              </p>
              <p className="mt-2 text-sm tracking-wide leading-6 max-md:text-xs ">
                {venue}
              </p>
            </div>
          </div>
        </div>
      ))}
      <div className="flex justify-center pt-[3vw] max-md:pt-4">
        <Button href="/information">了解詳情</Button>
      </div>
    </div>
  );
}

function Section02() {
  return (
    <div className="flex justify-center w-full  pt-44 max-lg:pt-24 ">
      <iframe
        className="w-full  h-[600px] max-md:h-[400px]"
        src="https://www.youtube.com/embed/CsPBsOyRvgE?si=Il58O1xlV96aedlA"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
}
