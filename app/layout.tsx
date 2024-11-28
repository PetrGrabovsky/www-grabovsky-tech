import '@/shared/styles/globals.css';

import clsx from 'clsx';
import { PropsWithChildren } from 'react';

import ClientLayout from '@/layout/components/ClientLayout';

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang='cs'>
      <body
        className={clsx(
          'flex min-h-screen w-full flex-col bg-body-background bg-white-carbon',
          'overflow-x-hidden antialiased'
        )}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
};

export default RootLayout;
