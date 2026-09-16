import contentJson from "./content.json";

type Article = (typeof contentJson)[keyof typeof contentJson];

interface ArticlesProps {
  article: Article;
}

export default function Articles({ article }: ArticlesProps) {
  const sections = Object.entries(article).filter(([key]) =>
    key.startsWith("section"),
  ) as Array<
    [
      string,
      {
        title: string;
        paragraph: string[];
      },
    ]
  >;

  return (
    <article aria-labelledby="selected-interview-title">
      <div className="grid items-center gap-8 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] md:gap-14">
        <img
          src={article.articleCover}
          alt={article.articleTop.title}
          className="mx-auto w-full max-w-xl"
        />

        <div className="text-center md:text-left">
          <p className="text-sm tracking-[0.3em] text-[#c4d8eb]">
            {article.articleTop.eyebrow}
          </p>
          <h2
            id="selected-interview-title"
            className="mt-3 text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-[0.16em] text-white [text-shadow:0_0_8px_rgba(255,255,255,0.4)]"
          >
            {article.articleTop.title}
          </h2>
          <div className="mt-6 space-y-3 text-[15px] leading-8 tracking-widest text-white/85 md:text-base">
            {article.articleTop.paragraph.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>

      {sections.map(([key, section]) => (
        <section
          key={key}
          className="border-t border-white/25 py-9 text-center md:py-12"
        >
          <h3 className="text-xl font-bold tracking-[0.12em] text-white md:text-2xl">
            {section.title}
          </h3>
          <div className="mx-auto mt-5 max-w-3xl space-y-3 text-[15px] leading-8 tracking-widest text-white/80 md:text-base">
            {section.paragraph.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>
      ))}
    </article>
  );
}
