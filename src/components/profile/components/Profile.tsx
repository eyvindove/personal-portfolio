import { configData } from '@/config';
import cx from 'clsx';

import AnchorBadge from '@/components/generic/AnchorBadge';

export default function Profile() {
  return (
    <div className={cx('flex flex-col gap-4')}>
      <div className={cx('font-permanent-marker', 'text-2xl', 'md:text-4xl')}>
        {configData.profile.name}
      </div>
      <div className={cx('font-permanent-marker', 'text-4xl', 'md:text-6xl')}>
        {configData.profile.title}
      </div>

      <AnchorBadge />

      <div
        className={cx(
          'flex flex-col gap-4',
          'mt-2 w-full text-sm',
          'md:mt-4 md:text-lg',
        )}
      >
        {configData.profile.content.map((section: string, index: number) => (
          <div key={index}>{section}</div>
        ))}
      </div>
    </div>
  );
}
