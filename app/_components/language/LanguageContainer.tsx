import SectionContainer from "@/app/_components/section/SectionContainer";
import SectionTitle from "@/app/_components/section/SectionTitle";
import { configData } from "@/app/_config";
import clsx from "clsx";
import { Fragment } from "react";
import SkillCard from "../card/SkillCard";

export default function LanguageContainer() {
  return (
    <SectionContainer>
      <SectionTitle anchorId="language" title="Language" />

      <div className={clsx("flex flex-wrap gap-3", "mt-8")}>
        {configData.language.map((language) => (
          <Fragment key={language.id}>
            <SkillCard item={language} />
          </Fragment>
        ))}
      </div>
    </SectionContainer>
  );
}
