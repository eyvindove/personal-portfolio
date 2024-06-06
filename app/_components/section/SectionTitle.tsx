import React from "react";
import cx from "clsx";

import AnchorBadge from "../generic/AnchorBadge";

export default function SectionTitle({
  title,
  anchorId,
}: {
  title: string;
  anchorId: string;
}) {
  return (
    <h3 id={anchorId} className={cx("pt-10 text-lg font-bold")}>
      <AnchorBadge />
      {title}
    </h3>
  );
}
