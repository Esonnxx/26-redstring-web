import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  href?: string;
  download?: boolean | string;
  rel?: string;
  target?: string;
}

export default function Button({
  children,
  href,
  download,
  rel,
  target,
  className = "",
  ...props
}: ButtonProps) {
  const buttonClassName = `relative isolate inline-flex items-center justify-center rounded-full bg-white px-12 py-5 text-[20px] leading-none text-black before:pointer-events-none before:absolute before:inset-[-2px] before:-z-10 before:rounded-full before:bg-white before:opacity-[0.35] before:blur-[12px] before:content-[''] before:transition-all before:duration-200 hover:before:inset-[-3px] hover:before:opacity-[0.45] hover:before:blur-[16px] ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        download={download}
        rel={rel}
        target={target}
        className={buttonClassName}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      {...props}
      className={buttonClassName}
    >
      {children}
    </button>
  );
}
