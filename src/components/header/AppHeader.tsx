import cx from 'clsx';

export default function AppHeader() {
  return (
    <header
      className={cx(
        'font-permanent-marker',
        'fixed left-0 right-0 top-0 z-10',
        'bg-[#1b1b1b99]',
      )}
    >
      <div className={cx('mx-auto w-dvw max-w-[1600px] px-4 py-2')}>
        <div className={cx('text-sm')}>Chungwei Weng (Olaf)</div>
      </div>
    </header>
  );
}
