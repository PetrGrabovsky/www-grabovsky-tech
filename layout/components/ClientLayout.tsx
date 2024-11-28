import { PropsWithChildren } from 'react';

import Logo from '@/shared/components/Logo';

import Header from './Header';

const ClientLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header>
        <Logo />
      </Header>
      <main className='mb-12 mt-28 w-full flex-grow'>{children}</main>
      <footer className='h-10 w-full bg-neutral-900 bg-opacity-50'>Footer</footer>
    </>
  );
};

export default ClientLayout;
