import { configData } from "@/app/_config";
import clsx from "clsx";

export default function HomeProfile() {
  return (
    <div className={clsx("flex flex-col gap-4")}>
      <div className={clsx("font-permanent-marker", "text-2xl", "md:text-4xl")}>
        {configData.profile.name}
      </div>
      <div className={clsx("font-permanent-marker", "text-4xl", "md:text-6xl")}>
        {configData.profile.title}
      </div>

      <div
        className={clsx(
          "flex flex-col gap-4",
          "mt-6 w-full text-sm",
          "md:mt-8 md:text-lg",
        )}
      >
        {configData.profile.content.map((section: string, index: number) => (
          <div key={index}>{section}</div>
        ))}
      </div>
    </div>
  );
}
