import { Fragment } from 'react';
import cx from 'clsx';
import { configData } from '@/config';

import SectionContainer from '@/components/generic/section/SectionContainer';
import SectionTitle from '@/components/generic/section/SectionTitle';
import SkillCard from '@/components/generic/card/SkillCard';

export default function LanguageContainer() {
  return (
    <SectionContainer>
      <SectionTitle anchorId='language' title='Language' />

      <div className={cx('flex flex-wrap gap-3', 'mt-8')}>
        {configData.language.map((language) => (
          <Fragment key={language.id}>
            <SkillCard item={language} />
          </Fragment>
        ))}
      </div>
    </SectionContainer>
  );
}
