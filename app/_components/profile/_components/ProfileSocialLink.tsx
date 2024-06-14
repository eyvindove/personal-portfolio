import Link from "next/link";
import cx from "clsx";
import { IconContext } from "react-icons";
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

export default function ProfileSocialLink() {
  return (
    <div className={cx("flex justify-center gap-5", "md:justify-start")}>
      {socialLinkConfig.map((item) => (
        <Link
          key={item.id}
          href={item.link}
          target="_blank"
          className={cx(
            "flex items-center",
            "rounded-full bg-amber-500 bg-opacity-60 p-1 transition-all",
            "hover:bg-opacity-90",
          )}
        >
          <div
            className={cx(
              "flex items-center justify-center",
              "h-6 w-6 rounded-full bg-[--background-primary]",
              "md:h-6 md:w-6",
            )}
          >
            <IconContext.Provider value={{ size: "12px" }}>
              {item.icon}
            </IconContext.Provider>
          </div>
          <div className={cx("px-2 text-xs", "md:text-base")}>{item.label}</div>
        </Link>
      ))}
    </div>
  );
}
