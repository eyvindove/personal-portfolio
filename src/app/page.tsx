import cx from 'clsx';

import ProfileContainer from '@/components/profile/ProfileContainer';
import LanguageContainer from '@/components/language/LanguageContainer';
import NavigationBar from '@/components/navigation-bar/NavigationBar';
import SkillContainer from '@/components/skill/SkillContainer';
import WorkExperienceContainer from '@/components/work/WorkExperienceContainer';
import EducationContainer from '@/components/education/EducationContainer';
import PlaygroundContainer from '@/components/playground/PlaygroundContainer';

export default function Home() {
  return (
    <main
      className={cx(
        'font-comfortaa',
        'relative mx-auto w-dvw max-w-[1600px] overflow-hidden',
      )}
    >
      <NavigationBar />
      <ProfileContainer />
      <SkillContainer />
      <LanguageContainer />
      <WorkExperienceContainer />
      <EducationContainer />
      <PlaygroundContainer />
    </main>
  );
}
