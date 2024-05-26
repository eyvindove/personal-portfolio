import React from "react";
import clsx from "clsx";

export default function SectionTitle({
  title,
  anchorId,
}: {
  title: string;
  anchorId: string;
}) {
  return (
    <h3 id={anchorId} className={clsx("pt-10 text-lg font-bold")}>
      {title}
    </h3>
  );
}
