import { Fragment } from "react";
import cx from "clsx";
import { configData } from "@/app/_config";

import SectionContainer from "@/app/_components/section/SectionContainer";
import SectionTitle from "@/app/_components/section/SectionTitle";
import SkillCard from "../card/SkillCard";

export default function LanguageContainer() {
  return (
    <SectionContainer>
      <SectionTitle anchorId="language" title="Language" />

      <div className={cx("flex flex-wrap gap-3", "mt-8")}>
        {configData.language.map((language) => (
          <Fragment key={language.id}>
            <SkillCard item={language} />
          </Fragment>
        ))}
      </div>
    </SectionContainer>
  );
}
