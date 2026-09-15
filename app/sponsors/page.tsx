import Image from "next/image";
import PageBanner from "@/components/PageBanner";

const sponsors = [
  {
    file: "Sponsor_01.png",
    name: "存在音樂",
    url: "https://www.instagram.com/beingmusic2017?igsh=MWQzMmR4bTZ5Y3Nscw==",
  },
  {
    file: "Sponsor_02.png",
    name: "湯馬91譜",
    url: "https://www.91pu.com.tw/m/index.shtml",
  },
  { file: "Sponsor_03.png", name: "8178", url: "" },
  { file: "Sponsor_04.png", name: "聲潮", url: "https://soundtide.tw/" },
  { file: "Sponsor_05.png", name: "建豪印刷", url: "https://gainhow.tw/" },
  {
    file: "Sponsor_06.png",
    name: "氧顏森活",
    url: "https://www.instagram.com/forestbeauty_official/",
  },
  {
    file: "Sponsor_07.png",
    name: "曙島咖啡",
    url: "https://www.instagram.com/beingcafe_taipei/",
  },
  {
    file: "Sponsor_08.png",
    name: "財團法人華研基金會",
    url: "https://himfoundation.org.tw",
  },
  {
    file: "Sponsor_09.png",
    name: "MUST社團法人中華音樂著作權協會",
    url: "https://www.must.org.tw/index.aspx",
  },
];

const coOrganizers = [
  {
    file: "Sponsor_10.png",
    name: "樂岩音樂",
    url: "https://shop1688.com.tw/aom20200131141/#about",
  },
  {
    file: "Sponsor_11.png",
    name: "Ayers",
    url: "https://www.instagram.com/ayersguitar/",
  },
  { file: "Sponsor_12.png", name: "樂台計劃", url: "https://mcip.app/" },
];

interface SponsorLogoProps {
  file: string;
  name: string;
  url: string;
}

function SponsorLogo({ file, name, url }: SponsorLogoProps) {
  return (
    <figure className=" flex w-[clamp(7rem,13vw,8.25rem)] shrink-0 flex-col items-center">
      {url ? (
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          aria-label={`前往${name}網站`}
          className="block w-full transition-transform duration-200 hover:scale-105"
        >
          <Image
            src={`/assets/sponsors/logos/${file}`}
            alt={name}
            width={512}
            height={512}
            loading="eager"
            sizes="(max-width: 640px) 28vw, (max-width: 1024px) 13vw, 132px"
            className="h-auto w-full"
          />
        </a>
      ) : (
        <Image
          src={`/assets/sponsors/logos/${file}`}
          alt={name}
          width={512}
          height={512}
          loading="eager"
          sizes="(max-width: 640px) 28vw, (max-width: 1024px) 13vw, 132px"
          className="h-auto w-full"
        />
      )}
      <figcaption className="mt-3 w-full break-words text-center text-md font-medium tracking-[2px] text-white lg:w-max lg:max-w-[calc(100vw-2rem)]">
        {name}
      </figcaption>
    </figure>
  );
}

export default function Sponsors() {
  return (
    <main className="min-h-screen ">
      <PageBanner
        titleImage="/assets/sponsors/title_sponsors.webp"
        titleAlt="贊助廠商"
      />

      <section
        aria-label="贊助單位"
        className="mx-auto -mt-3 w-[min(100%-2rem,60rem)] pb-[clamp(5rem,10vw,9rem)] text-white md:-mt-20 "
      >
        <div className="flex flex-wrap justify-center gap-x-[clamp(2rem,7vw,5.5rem)] gap-y-[clamp(2.75rem,5vw,4rem)]">
          {sponsors.map((sponsor) => (
            <SponsorLogo key={sponsor.file} {...sponsor} />
          ))}
        </div>

        <div
          aria-hidden="true"
          className="mt-[clamp(3.5rem,8vw,6.5rem)] h-[5px] border-y border-white/45"
        />

        <section
          aria-labelledby="co-organizers-title"
          className="mt-[clamp(3rem,6vw,5rem)]"
        >
          <h2
            id="co-organizers-title"
            className="text-center text-[24px] font-bold tracking-[2px]"
          >
            協辦單位
          </h2>

          <div className="mt-[clamp(3rem,6vw,5rem)] flex flex-wrap justify-center gap-x-[clamp(2rem,7vw,5.5rem)] gap-y-[clamp(2.75rem,5vw,4rem)]">
            {coOrganizers.map((coOrganizer) => (
              <SponsorLogo key={coOrganizer.file} {...coOrganizer} />
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
