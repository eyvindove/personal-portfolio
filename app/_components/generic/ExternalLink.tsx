import React from "react";
import Image from "next/image";
import Link from "next/link";
import cx from "clsx";

export default function ExternalLink({
  url,
  label,
}: {
  url: string;
  label: string;
}) {
  return (
    <Link
      className={cx(
        "flex items-center gap-1",
        "rounded-full bg-amber-500 bg-opacity-10 px-2 py-1 text-xs transition-all",
        "hover:bg-opacity-30",
      )}
      href={url}
      target="_blank"
    >
      <div className={cx("relative h-3 w-3")}>
        <Image src={`/generic/link.svg`} alt={"link icon"} fill={true} />
      </div>
      {label}
    </Link>
  );
}
