import cx from "clsx";
import StackIcon from "tech-stack-icons";

import CardBorder from "./CardBorder";

export default function SkillCard({ item }: { item: SkillType }) {
  return (
    <CardBorder
      customOuterClasses={[
        "basis-[100%]",
        "md:basis-[calc((100%-12px)/2)]",
        "lg:basis-[calc((100%-24px)/3)]",
        "xl:basis-[calc((100%-36px)/4)]",
      ]}
      customInnerClasses={["flex items-center gap-3"]}
    >
      <div
        className={cx("flex items-center justify-center", "h-8 w-8 text-sm")}
      >
        {item.iconId ? (
          <StackIcon name={item.iconId} />
        ) : (
          <div>{item.iconText}</div>
        )}
      </div>
      <div className={cx("flex flex-col justify-between gap-2")}>
        <div className={cx("flex gap-1", "pt-1")}>
          {Array.from(Array(5), (_, i) => (
            <div
              key={i}
              className={cx("h-2 w-5 rounded-full", {
                "bg-amber-900": i === 0 && i <= item.level - 1,
                "bg-amber-800": i === 1 && i <= item.level - 1,
                "bg-amber-700": i === 2 && i <= item.level - 1,
                "bg-amber-600": i === 3 && i <= item.level - 1,
                "bg-amber-500": i === 4 && i <= item.level - 1,
                "bg-slate-700": i > item.level - 1,
              })}
            ></div>
          ))}
        </div>
        <div className={cx("text-xs")}>{item.label}</div>
      </div>
    </CardBorder>
  );
}
