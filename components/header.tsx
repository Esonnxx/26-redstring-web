"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  {
    href: "/about",
    label: "關於赤弦",
    children: [
      { href: "/about#red-string-purpose", label: "赤弦宗旨" },
      { href: "/about#about-tsaiyin", label: "關於采音" },
    ],
  },
  {
    href: "/information",
    label: "比賽須知",
    children: [
      { href: "/information#competition-guide", label: "參賽簡章" },
      { href: "/information#registration-process", label: "報名流程" },
      { href: "/information#transportation", label: "交通方式" },
    ],
  },
  {
    href: "/sponsors",
    label: "贊助廠商",
    children: [{ href: "/sponsors#co-organizers", label: "協辦單位" }],
  },
  { href: "/organizing", label: "籌備團隊" },
  // { href: "/interview", label: "採訪消息" },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  function closeMobileMenu() {
    setIsOpen(false);
    setOpenSubmenu(null);
  }

  function toggleMobileMenu() {
    if (isOpen) setOpenSubmenu(null);
    setIsOpen((open) => !open);
  }

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

      <nav
        aria-label="主要導覽"
        className="mx-auto mt-2 hidden w-fit md:block"
      >
        <ul className="flex items-center gap-2">
          {links.map((link) => (
            <li key={link.href} className="group relative">
              <Link
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className={`flex items-center gap-2 rounded-full border px-5 py-2 text-center transition-colors ${
                  pathname === link.href
                    ? "border-white/80"
                    : "border-transparent hover:border-white/50"
                }`}
              >
                {link.label}
                {link.children && (
                  <span
                    aria-hidden="true"
                    className="mb-1 block h-2 w-2 rotate-45 border-b border-r border-current"
                  />
                )}
              </Link>

              {link.children && (
                <div className="pointer-events-none invisible absolute left-1/2 top-full z-50 min-w-40 -translate-x-1/2 translate-y-1 pt-2 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  <ul className="rounded-2xl border border-white/20 bg-[#131224]/95 p-2 shadow-[0_12px_35px_rgba(0,0,0,0.35)] backdrop-blur-sm">
                    {link.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block whitespace-nowrap rounded-xl px-5 py-2.5 text-sm transition-colors hover:bg-white/10 focus-visible:bg-white/10 focus-visible:outline-none"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <button
        type="button"
        aria-label={isOpen ? "關閉選單" : "開啟選單"}
        aria-expanded={isOpen}
        onClick={toggleMobileMenu}
        className="absolute right-4 top-5 flex flex-col gap-1.5 rounded-md p-2 md:hidden"
      >
        <span className="h-px w-6 bg-white" />
        <span className="h-px w-6 bg-white" />
        <span className="h-px w-6 bg-white" />
      </button>

      {isOpen && (
        <nav
          aria-label="手機版主要導覽"
          className="mx-auto mt-4 w-[calc(100%+2rem)] -translate-x-4 bg-[#131224] p-3 md:hidden"
        >
          <ul className="flex flex-col items-center">
            {links.map((link) => {
              const submenuId = `mobile-submenu-${link.href.slice(1)}`;
              const isSubmenuOpen = openSubmenu === link.href;

              return (
                <li key={link.href} className="w-full">
                  {link.children ? (
                    <>
                      <div
                        className={`flex w-full items-stretch rounded-full border ${
                          pathname === link.href
                            ? "border-white/80"
                            : "border-transparent"
                        }`}
                      >
                        <Link
                          href={link.href}
                          onClick={closeMobileMenu}
                          aria-current={
                            pathname === link.href ? "page" : undefined
                          }
                          className="flex min-w-0 flex-1 items-center justify-center py-3 pl-12"
                        >
                          {link.label}
                        </Link>
                        <button
                          type="button"
                          aria-label={`${isSubmenuOpen ? "收合" : "展開"}${link.label}子選單`}
                          aria-expanded={isSubmenuOpen}
                          aria-controls={submenuId}
                          onClick={() =>
                            setOpenSubmenu(isSubmenuOpen ? null : link.href)
                          }
                          className="flex w-12 shrink-0 items-center justify-center rounded-full"
                        >
                          <span
                            aria-hidden="true"
                            className={`mb-1 block h-2.5 w-2.5 border-b border-r border-current transition-transform duration-200 ${
                              isSubmenuOpen ? "rotate-[225deg]" : "rotate-45"
                            }`}
                          />
                        </button>
                      </div>

                      {isSubmenuOpen && (
                        <ul
                          id={submenuId}
                          className="ml-6 w-[calc(100%-1.5rem)] border-l border-white/25 py-1 pl-3"
                        >
                          {link.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                onClick={closeMobileMenu}
                                className="block w-full rounded-lg px-4 py-2.5 text-left text-sm text-white/85 transition-colors hover:bg-white/10 hover:text-white focus-visible:bg-white/10 focus-visible:text-white focus-visible:outline-none"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={closeMobileMenu}
                      aria-current={
                        pathname === link.href ? "page" : undefined
                      }
                      className={`flex w-full items-center justify-center rounded-full border px-5 py-3 text-center ${
                        pathname === link.href
                          ? "border-white/80"
                          : "border-transparent"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
