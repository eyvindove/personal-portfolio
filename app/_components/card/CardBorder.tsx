import clsx from "clsx";
import React from "react";

export default function CardBorder({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={clsx(
        "rounded",
        "bg-gradient-to-r from-amber-900 to-amber-950 p-[2px]",
      )}
    >
      <div className={"rounded bg-[--background-primary] p-3"}>{children}</div>
    </div>
  );
}
