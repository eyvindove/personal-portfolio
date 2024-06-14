import profile from "./profile";
import skill from "./skill";
import language from "./language";
import workExperience from "./work-experience";
import education from "./education";
import playground from "./playground";

type ProfileType = {
  name: string;
  title: string;
  content: string[];
};

type ConfigDataType = {
  profile: ProfileType;
  skill: SkillType[];
  language: SkillType[];
  workExperience: ExperienceType[];
  education: ExperienceType[];
  playground: PlaygroundType[];
};

export const configData: ConfigDataType = {
  profile,
  skill,
  language,
  workExperience,
  education,
  playground,
};
