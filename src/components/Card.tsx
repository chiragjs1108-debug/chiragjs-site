import Link from "next/link";
import type { ReactNode } from "react";

type CardBaseProps = {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
};

type CardAsTag = CardBaseProps & {
  as?: "div" | "article" | "li";
  href?: undefined;
};

type CardAsLink = CardBaseProps & {
  href: string;
  as?: undefined;
};

type CardProps = CardAsTag | CardAsLink;

const baseStyles = "rounded-card border border-border bg-surface p-6 transition-all duration-[180ms]";

export function Card(props: CardProps) {
  const { children, className = "", hoverable = true } = props;
  const classes = `${baseStyles} ${
    hoverable ? "hover:-translate-y-0.5 hover:border-border-bright" : ""
  } ${className}`.trim();

  if (props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  const Tag = props.as ?? "div";
  return <Tag className={classes}>{children}</Tag>;
}
