import { useState } from 'react';

const useLayoutManager = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavOpen = () => setIsNavOpen((previous) => !previous);

  return { isNavOpen, toggleNavOpen };
};

export default useLayoutManager;
