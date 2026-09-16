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
  const buttonClassName = `inline-flex items-center justify-center rounded-full bg-white px-12 py-5 text-[20px] leading-none text-black shadow-[0_0_12px_rgba(255,255,255,0.35)] transition-shadow duration-200 hover:shadow-[0_0_16px_rgba(255,255,255,0.45)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${className}`;

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
