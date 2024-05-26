import React from "react";
import clsx from "clsx";

export default function SectionContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className={clsx("mx-auto w-4/5 p-4")}>
      <div
        className={clsx(
          "h-[1px] w-full bg-gradient-to-r from-amber-500 to-amber-800",
        )}
      ></div>
      {children}
    </section>
  );
}
