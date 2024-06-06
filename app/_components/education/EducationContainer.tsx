import { Fragment } from "react";
import { configData } from "@/app/_config";
import cx from "clsx";

import ExperienceCard from "@/app/_components/card/ExperienceCard";
import SectionContainer from "@/app/_components/section/SectionContainer";
import SectionTitle from "@/app/_components/section/SectionTitle";

export default function EducationContainer() {
  return (
    <SectionContainer>
      <SectionTitle anchorId="education" title="Education" />

      <div className={cx("flex flex-col gap-3", "mt-8")}>
        {configData.education.map((item, index) => (
          <Fragment key={index}>
            <ExperienceCard item={item} />
          </Fragment>
        ))}
      </div>
    </SectionContainer>
  );
}
