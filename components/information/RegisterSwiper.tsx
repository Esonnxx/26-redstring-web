"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";

const registerImages = Array.from(
  { length: 12 },
  (_, index) =>
    `/assets/information/register/register-${String(index + 1).padStart(2, "0")}.webp`,
);

export default function RegisterSwiper() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const dragStartX = useRef<number | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const handleChange = () => setIsMobile(mediaQuery.matches);

    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const imagesPerPage = isMobile ? 1 : 2;
  const pages = useMemo(() => {
    return Array.from(
      { length: Math.ceil(registerImages.length / imagesPerPage) },
      (_, pageIndex) =>
        registerImages.slice(
          pageIndex * imagesPerPage,
          (pageIndex + 1) * imagesPerPage,
        ),
    );
  }, [imagesPerPage]);

  const activePage = Math.min(currentPage, pages.length - 1);

  const goToPage = (offset: number) => {
    setCurrentPage((page) =>
      Math.max(0, Math.min(Math.min(page, pages.length - 1) + offset, pages.length - 1)),
    );
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    dragStartX.current = event.clientX;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (dragStartX.current === null) return;

    const distance = event.clientX - dragStartX.current;
    dragStartX.current = null;

    if (Math.abs(distance) >= 50) {
      goToPage(distance < 0 ? 1 : -1);
    }
  };

  return (
    <div className="relative mx-auto mt-10 w-full max-w-[1280px] px-[8%] md:mt-14 md:px-[5%]">
      <button
        type="button"
        aria-label="上一頁"
        onClick={() => goToPage(-1)}
        disabled={activePage === 0}
        className="absolute left-0 top-1/2 z-10 flex h-12 w-8 -translate-y-1/2 items-center justify-center text-white transition-opacity hover:opacity-70 disabled:opacity-30 md:left-0 md:h-16 md:w-10"
      >
        <svg viewBox="0 0 24 40" fill="none" aria-hidden="true" className="h-9 w-5 md:h-12 md:w-6">
          <path d="M20 2 4 20l16 18" stroke="currentColor" strokeWidth="2" />
        </svg>
      </button>

      <div
        className="cursor-grab select-none touch-pan-y overflow-hidden active:cursor-grabbing"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={() => {
          dragStartX.current = null;
        }}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activePage * 100}%)` }}
        >
          {pages.map((page, pageIndex) => (
            <div
              key={pageIndex}
              className="grid w-full shrink-0 grid-cols-1 gap-6 md:grid-cols-2 md:gap-[6%]"
            >
              {page.map((src, imageIndex) => (
                <img
                  key={src}
                  src={src}
                  alt={`第二十六屆赤弦獎報名流程第 ${pageIndex * imagesPerPage + imageIndex + 1} 步驟`}
                  draggable={false}
                  className="w-full rounded-[0.7rem] object-cover"
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        aria-label="下一頁"
        onClick={() => goToPage(1)}
        disabled={activePage === pages.length - 1}
        className="absolute right-0 top-1/2 z-10 flex h-12 w-8 -translate-y-1/2 items-center justify-center text-white transition-opacity hover:opacity-70 disabled:opacity-30 md:right-0 md:h-16 md:w-10"
      >
        <svg viewBox="0 0 24 40" fill="none" aria-hidden="true" className="h-9 w-5 md:h-12 md:w-6">
          <path d="m4 2 16 18L4 38" stroke="currentColor" strokeWidth="2" />
        </svg>
      </button>
    </div>
  );
}
