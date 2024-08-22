import { Fragment } from 'react';
import { configData } from '@/config';
import cx from 'clsx';

import ExperienceCard from '@/components/generic/card/ExperienceCard';
import SectionContainer from '@/components/generic/section/SectionContainer';
import SectionTitle from '@/components/generic/section/SectionTitle';

export default function EducationContainer() {
  return (
    <SectionContainer>
      <SectionTitle anchorId='education' title='Education' />

      <div className={cx('flex flex-col gap-3', 'mt-8')}>
        {configData.education.map((item, index) => (
          <Fragment key={index}>
            <ExperienceCard item={item} />
          </Fragment>
        ))}
      </div>
    </SectionContainer>
  );
}
