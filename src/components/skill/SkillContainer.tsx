import { Fragment } from 'react';
import cx from 'clsx';
import { configData } from '@/config';

import SectionContainer from '@/components/generic/section/SectionContainer';
import SectionTitle from '@/components/generic/section/SectionTitle';
import SkillCard from '@/components/generic/card/SkillCard';

export default function SkillContainer() {
  return (
    <SectionContainer>
      <SectionTitle anchorId='skill' title='Skill' />

      <div className={cx('flex flex-wrap gap-3', 'mt-8')}>
        {configData.skill.map((skill) => (
          <Fragment key={skill.id}>
            <SkillCard item={skill} />
          </Fragment>
        ))}
      </div>
    </SectionContainer>
  );
}
