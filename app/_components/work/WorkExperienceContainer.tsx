import { Fragment } from "react";
import cx from "clsx";
import { configData } from "@/app/_config";

import ExperienceCard from "@/app/_components/generic/card/ExperienceCard";
import SectionContainer from "@/app/_components/generic/section/SectionContainer";
import SectionTitle from "@/app/_components/generic/section/SectionTitle";

export default function WorkExperienceContainer() {
  return (
    <SectionContainer>
      <SectionTitle anchorId="work-experience" title="Work Experience" />

      <div className={cx("flex flex-col gap-3", "mt-8")}>
        {configData.workExperience.map((item, index) => (
          <Fragment key={index}>
            <ExperienceCard item={item} />
          </Fragment>
        ))}
      </div>
    </SectionContainer>
  );
}
