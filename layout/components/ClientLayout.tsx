'use client';

import { PropsWithChildren } from 'react';

import Logo from '@/shared/components/Logo';

import useLayoutManager from '../hooks/use-layout-manager';
import Header from './Header';
import Main from './Main';
import MenuButton from './MenuButton';

const ClientLayout = ({ children }: PropsWithChildren) => {
  const { isNavOpen, toggleNavOpen } = useLayoutManager();

  return (
    <>
      <Header>
        <Logo />
        <MenuButton isNavOpen={isNavOpen} onClick={toggleNavOpen} />
      </Header>
      <Main>{children}</Main>
      <footer className='h-10 w-full bg-neutral-900 bg-opacity-50'>Footer</footer>
    </>
  );
};

export default ClientLayout;
