import { PropsWithChildren } from 'react';

const ClientLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <header className='h-16 w-full bg-neutral-900 bg-opacity-50'>Header</header>
      <main className='w-full flex-grow'>{children}</main>
      <footer className='h-10 w-full bg-neutral-900 bg-opacity-50'>Footer</footer>
    </>
  );
};

export default ClientLayout;
