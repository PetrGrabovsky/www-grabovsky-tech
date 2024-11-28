import clsx from 'clsx';
import { PropsWithChildren } from 'react';

const Header = ({ children }: PropsWithChildren) => {
  return (
    <header
      className={clsx(
        'fixed inset-0 h-16 w-full border-b border-neutral-900 bg-neutral-950 bg-opacity-30',
        'z-50 py-2'
      )}
    >
      <div className='container h-full w-full'>{children}</div>
    </header>
  );
};

export default Header;
