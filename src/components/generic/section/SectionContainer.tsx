import React from 'react';
import cx from 'clsx';

export default function SectionContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className={cx('mx-auto w-4/5 p-4')}>{children}</section>;
}
