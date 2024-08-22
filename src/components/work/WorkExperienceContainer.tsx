import { Fragment } from 'react';
import cx from 'clsx';
import { configData } from '@/config';

import ExperienceCard from '@/components/generic/card/ExperienceCard';
import SectionContainer from '@/components/generic/section/SectionContainer';
import SectionTitle from '@/components/generic/section/SectionTitle';

export default function WorkExperienceContainer() {
  return (
    <SectionContainer>
      <SectionTitle anchorId='work-experience' title='Work Experience' />

      <div className={cx('flex flex-col gap-3', 'mt-8')}>
        {configData.workExperience.map((item, index) => (
          <Fragment key={index}>
            <ExperienceCard item={item} />
          </Fragment>
        ))}
      </div>
    </SectionContainer>
  );
}
