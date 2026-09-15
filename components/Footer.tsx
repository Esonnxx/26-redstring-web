const socialLinks = [
  {
    href: "https://www.facebook.com/NTUT.TsaiYin.RedString",
    label: "Facebook",
    src: "/assets/footer/FB.svg",
  },
  {
    href: "https://www.instagram.com/redstring_26th/",
    label: "Instagram",
    src: "/assets/footer/IG.svg",
  },
  {
    href: "https://www.youtube.com/@ntut1272",
    label: "YouTube",
    src: "/assets/footer/YT.svg",
  },
];

export default function Footer() {
  return (
    <footer data-aos="fade-in" className="text-white">
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/footer/footer_background.webp')",
        }}
      >
        <div className="mx-auto flex w-full max-w-[1440px] flex-col justify-between gap-10 px-[8%] py-[8%] sm:px-[10%] md:flex-row md:items-end md:gap-12 md:px-[11.5%] md:py-[2%]">
          <address className="not-italic text-[16px] leading-[2.1]">
            <p>總召 戴銘皜 0965-565-780</p>
            <p>副召 張慧堉 0981-775-615</p>

            <p className="mt-5">公關</p>
            <p>廖奕棋 0928-793-681</p>
            <p>彭揚詠 0981-281-292</p>

            <p className="mt-5">赤弦獎官方 gmail : ntutredstring@gmail.com</p>
          </address>

          <nav aria-label="社群連結">
            <ul className="flex items-center gap-[clamp(1.5rem,4vw,2rem)]">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    aria-label={link.label}
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-full transition-transform duration-300 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  >
                    <img
                      src={link.src}
                      alt=""
                      aria-hidden="true"
                      className="h-[clamp(2.5rem,4vw,2rem)] w-auto"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="bg-[#0D0C1F] px-[5%] py-5 text-center text-[16px] text-white/90">
        Copyright © 2026 采音吉他社. All rights reserved.
      </div>
    </footer>
  );
}
