import React from "react";
import cx from "clsx";

export default function CardBorder({
  customOuterClasses,
  customInnerClasses,
  children,
}: {
  customOuterClasses?: string | Array<string>;
  customInnerClasses?: string | Array<string>;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cx(
        "rounded",
        "bg-gradient-to-r from-amber-900 to-amber-950 p-[2px] transition-all",
        "hover:scale-105",
        customOuterClasses,
      )}
    >
      <div
        className={cx(
          "h-full w-full rounded bg-[--background-primary] p-3",
          customInnerClasses,
        )}
      >
        {children}
      </div>
    </div>
  );
}
