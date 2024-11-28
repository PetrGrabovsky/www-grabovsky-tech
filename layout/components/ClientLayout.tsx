'use client';

import { PropsWithChildren } from 'react';

import Logo from '@/shared/components/Logo';

import Header from './Header';
import Main from './Main';

const ClientLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header>
        <Logo />
      </Header>
      <Main>{children}</Main>
      <footer className='h-10 w-full bg-neutral-900 bg-opacity-50'>Footer</footer>
    </>
  );
};

export default ClientLayout;
