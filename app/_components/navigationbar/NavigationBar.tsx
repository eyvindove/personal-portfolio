"use client";

import type { NavbarItemType } from "@/app/_types";
import anime from "animejs/lib/anime.es.js";
import clsx from "clsx";
import { Fragment, useEffect } from "react";
import ScrollToTop from "../scroll-to-top/ScrollToTop";
import NavbarItem from "./_components/NavbarItem";

const navbarConfig: NavbarItemType[] = [
  {
    id: "home",
    label: "Home",
  },
  {
    id: "skill",
    label: "Skill",
  },
  {
    id: "language",
    label: "Language",
  },
  {
    id: "work-experience",
    label: "Work Experience",
  },
  {
    id: "education",
    label: "Education",
  },
];

export default function NavigationBar() {
  useEffect(() => {
    anime({
      targets: "#navbar-line",
      height: 64,
      delay: 500,
      duration: 3000,
    });
  }, []);

  return (
    <div className={clsx("fixed bottom-0 right-2 top-0 z-20", "md:right-5")}>
      <div
        id="navbar-line"
        className={clsx("mx-auto h-1/2 w-[0.75px] bg-[--background-secondary]")}
      ></div>
      <div
        className={clsx(
          "flex flex-col gap-1",
          "rounded-full bg-[--background-secondary] p-1",
        )}
      >
        {navbarConfig.map((item: NavbarItemType) => (
          <Fragment key={item.id}>
            <NavbarItem item={item} />
          </Fragment>
        ))}
      </div>
      <ScrollToTop />
    </div>
  );
}
