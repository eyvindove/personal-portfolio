import React from "react";
import Image from "next/image";
import cx from "clsx";

import CardBorder from "./CardBorder";
import ExternalLink from "../ExternalLink";

export default function PlaygroundCard({ item }: { item: PlaygroundType }) {
  return (
    <CardBorder
      customOuterClasses={[
        "basis-[100%] rounded",
        "md:basis-[calc((100%-12px)/2)]",
        "lg:basis-[calc((100%-24px)/3)]",
      ]}
      customInnerClasses={["flex flex-col gap-3"]}
    >
      <div
        className={cx(
          "relative h-[300px] w-full",
          "md:h-[280px]",
          "lg:h-[240px]",
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
    </CardBorder>
  );
}
