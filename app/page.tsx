import cx from "clsx";

import HomeContainer from "./_components/home/HomeContainer";
import LanguageContainer from "./_components/language/LanguageContainer";
import NavigationBar from "./_components/navigationbar/NavigationBar";
import SkillContainer from "./_components/skill/SkillContainer";
import WorkExperienceContainer from "./_components/work/WorkExperienceContainer";
import EducationContainer from "./_components/education/EducationContainer";
import PlaygroundContainer from "./_components/playground/PlaygroundContainer";

export default function Home() {
  return (
    <main
      className={cx(
        "font-comfortaa",
        "relative mx-auto w-dvw max-w-[1600px] overflow-hidden",
      )}
    >
      <NavigationBar />
      <HomeContainer />
      <SkillContainer />
      <LanguageContainer />
      <WorkExperienceContainer />
      <EducationContainer />
      <PlaygroundContainer />
    </main>
  );
}
