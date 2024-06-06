"use client";

import { useEffect } from "react";
import Image from "next/image";
import cx from "clsx";

import useScrollToTop from "@/app/_hooks/useScrollToTopVisible";

export default function ScrollToTop() {
  const isVisible = useScrollToTop();

  function scrollToTop() {
    const isBrowser = () => typeof window !== "undefined";
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div
      className={cx(
        "absolute bottom-8 flex items-center justify-center",
        "m-1 h-8 w-8 cursor-pointer rounded-full border border-transparent bg-[--background-primary] transition-all",
        "hover:border-[--color-light]",
        "md:h-10 md:w-10",
        { flex: isVisible, hidden: !isVisible },
      )}
      onClick={scrollToTop}
    >
      <div className={cx("relative h-4 w-4", "md:h-5 md:w-5")}>
        <Image
          src={`/generic/arrow-circle-up.svg`}
          alt={`back to top icon`}
          fill={true}
        />
      </div>
    </div>
  );
}
