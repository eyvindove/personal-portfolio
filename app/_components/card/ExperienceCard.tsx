import type { ExperienceType } from "@/app/_types";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import CardBorder from "./CardBorder";

export default function ExperienceCard({ item }: { item: ExperienceType }) {
  return (
    <CardBorder>
      <div className={clsx("flex flex-col gap-3", "md:flex-row")}>
        <div
          className={clsx(
            "relative h-8 w-8 shrink-0 overflow-hidden rounded-full",
          )}
        >
          <Image
            src={`/logo/${item.id}-logo.jpeg`}
            alt={`${item.id} icon`}
            fill={true}
          />
        </div>

        <div className={clsx("flex flex-col gap-2", "text-sm", "md:text-base")}>
          <div className={clsx("flex gap-1")}>
            {item.role.map((role: string, index: number) => (
              <div
                key={index}
                className={clsx({
                  "text-[--color-grey]": index > 0,
                })}
              >
                <span>{index > 0 ? ` ↢ ` : ""}</span>
                <span>{role}</span>
              </div>
            ))}
          </div>
          <div className={clsx("text-sm italic text-[--color-grey]")}>
            <div className={clsx("")}>{item.place}</div>
            <div className={clsx("")}>{item.duration}</div>
          </div>
          <div className={clsx("whitespace-pre-line")}>{item.description}</div>
          {item.devStack && (
            <div className={clsx("flex flex-wrap gap-1")}>
              {item.devStack.map((stack: string) => (
                <div
                  key={stack}
                  className={clsx(
                    "flex items-center gap-1",
                    "rounded-full bg-amber-500 bg-opacity-50 px-2 py-[2px] text-xs",
                  )}
                >
                  <div className={clsx("relative h-3 w-3")}>
                    <Image
                      src={`/generic/verified.svg`}
                      alt={"verified icon"}
                      fill={true}
                    />
                  </div>
                  {stack}
                </div>
              ))}
            </div>
          )}
          {item.link && (
            <div className={clsx("flex flex-wrap gap-1")}>
              {item.link.map((link, index) => (
                <Link
                  className={clsx(
                    "flex items-center gap-1",
                    "rounded-full bg-amber-500 bg-opacity-10 px-2 py-1 text-xs",
                  )}
                  key={index}
                  href={link[1]}
                  target="_blank"
                >
                  <div className={clsx("relative h-3 w-3")}>
                    <Image
                      src={`/generic/link.svg`}
                      alt={"link icon"}
                      fill={true}
                    />
                  </div>
                  {link[0]}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </CardBorder>
  );
}
