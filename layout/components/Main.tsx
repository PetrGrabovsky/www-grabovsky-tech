import { PropsWithChildren, useRef } from 'react';

import useScrollMaskEffect from '../hooks/use-scroll-mask-effect';

const Main = ({ children }: PropsWithChildren) => {
  const mainReference = useRef<HTMLElement>(null);

  useScrollMaskEffect(mainReference);

  return (
    <main
      ref={mainReference}
      className='w-full flex-grow pb-12 pt-28 mask-size mask-repeat will-change-mask'
      style={{
        maskImage: 'linear-gradient(to bottom, transparent 32px, black 150px, black 100%)',
      }}
    >
      {children}
    </main>
  );
};

export default Main;
