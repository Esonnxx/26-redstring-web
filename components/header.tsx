"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/about", label: "關於赤弦" },
  { href: "/information", label: "比賽須知" },
  { href: "/sponsors", label: "贊助廠商" },
  { href: "/organizing", label: "籌備團隊" },
  // { href: "/interview", label: "採訪消息" },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-40 bg-gradient-to-b from-[#131224]/60 to-[#131224]/0 px-4 pt-4 pb-14 text-white md:pb-16">
      <Link
        href="/"
        aria-label="回到首頁"
        className="mx-auto block w-fit transition-opacity hover:opacity-80"
      >
        <img
          className="w-[clamp(4.5rem,8vw,7rem)]"
          src="/assets/header_icon.webp"
          alt="第二十六屆赤弦獎「跫聲」首頁"
        />
      </Link>

      <nav className="mx-auto mt-2 hidden w-fit items-center gap-2 md:flex">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`rounded-full border px-5 py-2 text-center transition-colors ${
              pathname === link.href
                ? "border-white/80"
                : "border-transparent hover:border-white/50"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <button
        type="button"
        aria-label={isOpen ? "關閉選單" : "開啟選單"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        className="absolute right-4 top-5 flex flex-col gap-1.5 rounded-md p-2 md:hidden"
      >
        <span className="h-px w-6 bg-white" />
        <span className="h-px w-6 bg-white" />
        <span className="h-px w-6 bg-white" />
      </button>

      {isOpen && (
        <nav className="mx-auto mt-4 flex w-[calc(100%+2rem)] -translate-x-4 flex-col items-center bg-[#131224] p-3 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`flex w-full items-center justify-center rounded-full border px-5 py-3 text-center ${
                pathname === link.href
                  ? "border-white/80"
                  : "border-transparent"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
