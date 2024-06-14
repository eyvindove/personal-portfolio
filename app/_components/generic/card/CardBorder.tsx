import React from "react";
import cx from "clsx";

export default function CardBorder({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={cx(
        "rounded",
        "bg-gradient-to-r from-amber-900 to-amber-950 p-[2px]",
      )}
    >
      <div className={"rounded bg-[--background-primary] p-3"}>{children}</div>
    </div>
  );
}
