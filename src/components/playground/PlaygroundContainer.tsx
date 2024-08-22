import { Fragment } from 'react';
import cx from 'clsx';
import { configData } from '@/config';

import SectionContainer from '@/components/generic/section/SectionContainer';
import SectionTitle from '@/components/generic/section/SectionTitle';
import PlaygroundCard from '@/components/generic/card/PlaygroundCard';

export default function PlaygroundContainer() {
  return (
    <SectionContainer>
      <SectionTitle anchorId='playground' title='Playground' />

      <div className={cx('flex flex-wrap gap-3', 'mt-8')}>
        {configData.playground.map((item) => (
          <Fragment key={item.id}>
            <PlaygroundCard item={item} />
          </Fragment>
        ))}
      </div>
    </SectionContainer>
  );
}
