import ExperienceCard from "@/app/_components/card/ExperienceCard";
import SectionContainer from "@/app/_components/section/SectionContainer";
import SectionTitle from "@/app/_components/section/SectionTitle";
import { configData } from "@/app/_config";
import clsx from "clsx";
import { Fragment } from "react";

export default function WorkExperienceContainer() {
  return (
    <SectionContainer>
      <SectionTitle anchorId="work-experience" title="Work Experience" />

      <div className={clsx("flex flex-col gap-3", "mt-8")}>
        {configData.workExperience.map((item, index) => (
          <Fragment key={index}>
            <ExperienceCard item={item} />
          </Fragment>
        ))}
      </div>
    </SectionContainer>
  );
}
