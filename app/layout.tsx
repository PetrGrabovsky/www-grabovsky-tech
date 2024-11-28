import '@/shared/styles/globals.css';

import clsx from 'clsx';
import { PropsWithChildren } from 'react';

import ClientLayout from '@/layout/components/ClientLayout';
import { inter } from '@/shared/styles/fonts';

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang='cs'>
      <body
        className={clsx(
          'flex min-h-screen w-full flex-col bg-body-background bg-white-carbon',
          'overflow-x-hidden antialiased',
          inter.className
        )}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
};

export default RootLayout;
