import SectionContainer from "@/app/_components/section/SectionContainer";
import SectionTitle from "@/app/_components/section/SectionTitle";
import { configData } from "@/app/_config";
import clsx from "clsx";
import { Fragment } from "react";
import SkillCard from "../card/SkillCard";

export default function SkillContainer() {
  return (
    <SectionContainer>
      <SectionTitle anchorId="skill" title="Skill" />

      <div className={clsx("flex flex-wrap gap-3", "mt-8")}>
        {configData.skill.map((skill) => (
          <Fragment key={skill.id}>
            <SkillCard item={skill} />
          </Fragment>
        ))}
      </div>
    </SectionContainer>
  );
}
