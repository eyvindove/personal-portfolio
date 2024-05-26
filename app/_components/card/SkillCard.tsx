import type { SkillType } from "@/app/_types";
import clsx from "clsx";
import StackIcon from "tech-stack-icons";

export default function SkillCard({ item }: { item: SkillType }) {
  return (
    <div
      key={item.id}
      className={clsx(
        "basis-[100%] rounded",
        "bg-gradient-to-r from-amber-900 to-amber-950 p-[2px]",
        "md:basis-[calc((100%-12px)/2)]",
        "lg:basis-[calc((100%-24px)/3)]",
        "xl:basis-[calc((100%-36px)/4)]",
      )}
    >
      <div
        className={clsx(
          "flex items-center gap-3",
          "rounded bg-[--background-primary] p-3",
        )}
      >
        <div
          className={clsx(
            "flex items-center justify-center",
            "h-8 w-8 text-sm",
          )}
        >
          {item.iconId ? (
            <StackIcon name={item.iconId} />
          ) : (
            <div>{item.iconText}</div>
          )}
        </div>
        <div className={clsx("flex flex-col justify-between gap-2")}>
          <div className={clsx("flex gap-1", "pt-1")}>
            {Array.from(Array(5), (_, i) => (
              <div
                key={i}
                className={clsx("h-2 w-5 rounded-full", {
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
          <div className={clsx("text-xs")}>{item.label}</div>
        </div>
      </div>
    </div>
  );
}
