"use client";

import { Children, cloneElement, isValidElement } from "react";
import type { ReactElement, ReactNode } from "react";

type StaggerGroupProps = {
  children: ReactNode;
  className?: string;
  /** Seconds between each child's reveal. Defaults to 60ms per the design system. */
  stagger?: number;
};

type DelayProp = { delay?: number };

export function StaggerGroup({ children, className = "", stagger = 0.06 }: StaggerGroupProps) {
  const items = Children.toArray(children).filter(isValidElement) as ReactElement<DelayProp>[];

  return (
    <div className={className}>
      {items.map((child, index) =>
        cloneElement(child, {
          key: child.key ?? index,
          delay: (child.props.delay ?? 0) + index * stagger,
        })
      )}
    </div>
  );
}
