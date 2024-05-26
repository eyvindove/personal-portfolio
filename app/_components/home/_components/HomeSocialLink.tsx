import type { SocialConfigType } from "@/app/_types";
import clsx from "clsx";
import Link from "next/link";
import { TfiGithub, TfiLinkedin } from "react-icons/tfi";

const socialLinkConfig: SocialConfigType[] = [
  {
    id: "linkedin",
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/chungwei-weng/",
    icon: <TfiLinkedin />,
  },
  {
    id: "github",
    label: "GitHub",
    link: "https://github.com/eyvindove",
    icon: <TfiGithub />,
  },
];

export default function HomeSocialLink() {
  return (
    <div className={clsx("flex justify-center gap-5", "md:justify-start")}>
      {socialLinkConfig.map((item) => (
        <Link
          key={item.id}
          href={item.link}
          target="_blank"
          className={clsx(
            "flex items-center gap-1",
            "rounded-full bg-amber-500 bg-opacity-60 p-1 transition-all",
            "hover:bg-opacity-90",
          )}
        >
          <div
            className={clsx(
              "flex items-center justify-center",
              "h-6 w-6 rounded-full bg-[--background-primary]",
              "md:h-8 md:w-8",
            )}
          >
            {item.icon}
          </div>
          <div className={clsx("px-2 text-sm", "md:text-base")}>
            {item.label}
          </div>
        </Link>
      ))}
    </div>
  );
}