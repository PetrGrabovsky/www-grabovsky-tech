import { RefObject, useCallback, useEffect, useRef } from 'react';

const useScrollMaskEffect = (mainReference: RefObject<HTMLElement>) => {
  const animationFrameId = useRef<number | null>(null);

  const handleScroll = useCallback(() => {
    if (mainReference.current) {
      const scrollY = window.scrollY;
      mainReference.current.style.maskPosition = `0 ${scrollY}px`;
    }
    animationFrameId.current = null;
  }, [mainReference]);

  const onScroll = useCallback(() => {
    if (animationFrameId.current === null) {
      animationFrameId.current = requestAnimationFrame(handleScroll);
    }
  }, [handleScroll]);

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [handleScroll, onScroll]);
};

export default useScrollMaskEffect;
