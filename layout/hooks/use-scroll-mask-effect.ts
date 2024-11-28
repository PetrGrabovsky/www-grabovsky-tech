import { RefObject, useCallback, useEffect, useRef } from 'react';

const useScrollMaskEffect = (mainReference: RefObject<HTMLElement>) => {
  const animationFrameId = useRef<number | undefined>(undefined);

  const handleScroll = useCallback(() => {
    if (mainReference.current) {
      const scrollY = window.scrollY;
      mainReference.current.style.maskPosition = `0 ${scrollY}px`;
    }
    animationFrameId.current = undefined;
  }, [mainReference]);

  const onScroll = useCallback(() => {
    if (animationFrameId.current === undefined) {
      animationFrameId.current = requestAnimationFrame(handleScroll);
    }
  }, [handleScroll]);

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);

      if (animationFrameId.current !== undefined) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [handleScroll, onScroll]);
};

export default useScrollMaskEffect;
