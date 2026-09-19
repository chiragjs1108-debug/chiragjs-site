import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "ghost" | "link";

type ButtonBaseProps = {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
};

type ButtonAsLink = ButtonBaseProps & {
  href: string;
  target?: string;
  rel?: string;
  type?: undefined;
  onClick?: undefined;
  disabled?: undefined;
};

type ButtonAsButton = ButtonBaseProps & {
  href?: undefined;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  target?: undefined;
  rel?: undefined;
};

export type ButtonProps = ButtonAsLink | ButtonAsButton;

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-button font-medium text-[15px] leading-none transition-all duration-[180ms] disabled:pointer-events-none disabled:opacity-50";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-lime px-6 py-3 text-ink shadow-lime-glow hover:brightness-110 hover:shadow-[0_0_56px_rgba(200,255,61,0.18)] active:brightness-95",
  ghost:
    "border border-border px-6 py-3 text-text hover:border-border-bright hover:bg-surface-2",
  link: "px-0 py-0 text-lime underline-offset-4 hover:text-lime-dim hover:underline",
};

export function Button({ variant = "primary", className = "", children, ...rest }: ButtonProps) {
  const classes = `${baseStyles} ${variantStyles[variant]} ${className}`.trim();

  if (rest.href) {
    return (
      <Link href={rest.href} target={rest.target} rel={rest.rel} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={rest.type ?? "button"}
      onClick={rest.onClick}
      disabled={rest.disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
