"use client";

import { useRef, useState } from "react";
import PageBanner from "@/components/PageBanner";
import Articles from "./components/articles";
import contentJson from "./components/content.json";

type ArticleKey = keyof typeof contentJson;

const articleEntries = Object.entries(contentJson) as Array<
  [ArticleKey, (typeof contentJson)[ArticleKey]]
>;

export default function InterviewPage() {
  const [selectedArticle, setSelectedArticle] =
    useState<ArticleKey>("ARTICLE01");
  const articleRef = useRef<HTMLElement>(null);

  function selectArticle(articleKey: ArticleKey) {
    setSelectedArticle(articleKey);
    window.setTimeout(() => {
      articleRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 0);
  }

  return (
    <main className="min-h-screen">
      <PageBanner
        titleImage="/assets/interview/interview_title.webp"
        titleAlt="採訪消息"
      />

      <section
        aria-labelledby="interview-heading"
        className="mx-auto -mt-4 w-[min(100%-2rem,72rem)] pb-[clamp(5rem,10vw,9rem)] text-white md:-mt-24 "
      >
        <div className=" grid gap-8 md:mt-14 md:grid-cols-2 md:gap-12">
          {articleEntries.map(([articleKey, article]) => {
            const isSelected = selectedArticle === articleKey;

            return (
              <button
                key={articleKey}
                type="button"
                onClick={() => selectArticle(articleKey)}
                aria-pressed={isSelected}
                className={`group rounded-[2rem] text-left outline-offset-4 transition duration-300 focus-visible:outline-2 focus-visible:outline-white ${
                  isSelected ? "scale-[1.02]" : "hover:scale-[1.02]"
                }`}
              >
                <img
                  src={article.articleCover}
                  alt={`閱讀${article.articleTop.title}的專訪`}
                  className={`w-full transition duration-300 ${
                    isSelected
                      ? "brightness-110"
                      : "opacity-85 group-hover:opacity-100"
                  }`}
                />
                <div className="px-3 text-center">
                  <h3 className="mt-2 text-xl font-bold tracking-[0.15em] text-white md:text-2xl">
                    {article.articleTop.title}
                  </h3>
                </div>
              </button>
            );
          })}
        </div>

        <div
          aria-hidden="true"
          className="my-12 h-[5px] w-full border-y border-white/45 md:my-20"
        />

        <section
          ref={articleRef}
          className="scroll-mt-8 px-6 py-10 md:px-12 md:py-14"
          data-aos="fade-up"
        >
          <Articles article={contentJson[selectedArticle]} />
        </section>
      </section>
    </main>
  );
}
