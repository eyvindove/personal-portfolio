import React from 'react';
import cx from 'clsx';

export default function AnchorBadge() {
  return (
    <div className={cx('flex gap-2', 'pb-3')}>
      <div className={cx('h-2 w-5 rounded-sm bg-amber-500')}></div>
      <div className={cx('h-2 w-5 rounded-sm bg-amber-800')}></div>
    </div>
  );
}
