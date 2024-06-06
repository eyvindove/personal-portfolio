"use client";

import cx from "clsx";
import Image from "next/image";
import Link from "next/link";

export default function NavbarItem({ item }: { item: NavbarItemType }) {
  return (
    <Link
      href={`#${item.id}`}
      className={cx(
        "group",
        "flex items-center justify-center",
        "h-8 w-8 cursor-pointer rounded-full border border-transparent bg-[--background-primary] transition-all",
        "hover:border-amber-500",
        "md:h-10 md:w-10",
      )}
    >
      <div className={cx("relative h-4 w-4", "md:h-5 md:w-5")}>
        <Image
          src={`/navbar/${item.id}.svg`}
          alt={`${item.id} icon`}
          fill={true}
        />
      </div>
      <div
        className={cx(
          "group-hover:block",
          "absolute right-[calc(100%+8px)] hidden",
          "text-nowrap bg-[--background-primary] bg-transparent text-right text-xs",
          "transition-all",
        )}
      >
        {item.label}
      </div>
    </Link>
  );
}
