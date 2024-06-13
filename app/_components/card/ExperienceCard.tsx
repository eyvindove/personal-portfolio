import { Fragment } from "react";
import cx from "clsx";
import Image from "next/image";
import Link from "next/link";

import CardBorder from "./CardBorder";
import ExternalLink from "../generic/ExternalLink";

export default function ExperienceCard({ item }: { item: ExperienceType }) {
  return (
    <CardBorder>
      <div className={cx("flex flex-col gap-3", "md:flex-row")}>
        <div
          className={cx(
            "relative h-8 w-8 shrink-0 overflow-hidden rounded-full",
          )}
        >
          <Image
            src={`/logo/${item.id}-logo.jpeg`}
            alt={`${item.id} icon`}
            fill={true}
          />
        </div>

        <div className={cx("flex flex-col gap-2", "text-sm", "md:text-base")}>
          <div className={cx("flex flex-col gap-1", "md:flex-row")}>
            {item.role.map((role: string, index: number) => (
              <div
                key={index}
                className={cx({
                  "text-[--color-grey]": index > 0,
                })}
              >
                <span>{index > 0 ? ` ↢ ` : ""}</span>
                <span>{role}</span>
              </div>
            ))}
          </div>
          <div className={cx("text-xs italic text-[--color-grey]")}>
            <div className={cx("")}>{item.place}</div>
            <div className={cx("")}>{item.duration}</div>
          </div>
          <div className={cx("whitespace-pre-line text-sm")}>
            {item.description}
          </div>
          {item.devStack && (
            <div className={cx("flex flex-wrap gap-1")}>
              {item.devStack.map((stack: string) => (
                <div
                  key={stack}
                  className={cx(
                    "flex items-center gap-1",
                    "rounded-full bg-amber-500 bg-opacity-50 px-2 py-[2px] text-xs",
                  )}
                >
                  <div className={cx("relative h-3 w-3", "shrink-0")}>
                    <Image
                      src={`/generic/verified.svg`}
                      alt={"verified icon"}
                      fill={true}
                    />
                  </div>
                  <div>{stack}</div>
                </div>
              ))}
            </div>
          )}
          {item.link && (
            <div className={cx("flex flex-wrap gap-1")}>
              {item.link.map((link, index) => (
                <Fragment key={index}>
                  <ExternalLink url={link[1]} label={link[0]} />
                </Fragment>
              ))}
            </div>
          )}
        </div>
      </div>
    </CardBorder>
  );
}
