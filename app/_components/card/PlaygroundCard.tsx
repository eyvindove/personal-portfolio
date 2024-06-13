import React from "react";
import Image from "next/image";
import cx from "clsx";

import ExternalLink from "../generic/ExternalLink";

export default function PlaygroundCard({ item }: { item: PlaygroundType }) {
  return (
    <div
      key={item.id}
      className={cx(
        "basis-[100%] rounded",
        "bg-gradient-to-r from-amber-900 to-amber-950 p-[2px]",
        "md:basis-[calc((100%-12px)/2)]",
        "lg:basis-[calc((100%-24px)/3)]",
        "xl:basis-[calc((100%-36px)/4)]",
      )}
    >
      <div
        className={cx(
          "flex flex-col gap-3",
          "h-full w-full rounded bg-[--background-primary] p-3",
        )}
      >
        <div
          className={cx(
            "relative h-[360px] w-full",
            "md:h-[300px]",
            "lg:h-[280px]",
            "xl:h-[240px]",
          )}
        >
          <Image
            src={`/playground/${item.image}`}
            alt={`${item.title} image`}
            fill={true}
          />
        </div>

        <div className={cx("py-1")}>{item.title}</div>
        <div className={cx("py-1 text-sm")}>{item.description}</div>

        <div className={cx("flex gap-2", "mt-auto w-full")}>
          <ExternalLink url={item.github} label={"GitHub"} />
          <ExternalLink url={item.demo} label={"Live Demo"} />
        </div>
      </div>
    </div>
  );
}
