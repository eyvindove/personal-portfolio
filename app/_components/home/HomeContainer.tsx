"use client";

import anime from "animejs/lib/anime.es.js";
import clsx from "clsx";
import Link from "next/link";
import { useEffect } from "react";
import HomeProfile from "./_components/HomeProfile";
import HomeSocialLink from "./_components/HomeSocialLink";

export default function HomeContainer() {
  useEffect(() => {
    anime({
      targets: "#home-bg-ball",
      top: 64,
      left: 128,
      scale: 1.2,
      direction: "alternate",
      loop: true,
      easing: "easeInOutSine",
      duration: 3000,
    });
  }, []);

  return (
    <section
      id="home"
      className={clsx(
        "flex items-center justify-center",
        "h-full min-h-dvh pt-10",
      )}
    >
      <div
        className={clsx(
          "absolute -left-5 top-10 -z-[1]",
          "h-[480px] w-[480px] bg-amber-500 bg-opacity-10",
          "rounded-full",
        )}
      ></div>
      <div
        id="home-bg-ball"
        className={clsx(
          "absolute left-8 top-12 -z-[1]",
          "h-[240px] w-[240px] bg-amber-500 bg-opacity-20",
          "rounded-full",
        )}
      ></div>

      <div className={clsx("flex flex-col gap-8", "w-4/5 p-4", "md:gap-10")}>
        <HomeProfile />
        <HomeSocialLink />

        <div className={clsx("flex", "w-full")}>
          <Link
            href="#skill"
            className={clsx(
              "mx-auto rounded-full bg-amber-500 bg-opacity-20 px-2 py-1",
              "animate-bounce",
            )}
          >
            ⇃ About Me ⇂
          </Link>
        </div>
      </div>
    </section>
  );
}
