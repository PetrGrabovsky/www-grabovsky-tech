import clsx from 'clsx';
import { motion } from 'motion/react';

const iconVariants = {
  cross: { rotate: 45 },
  grid: { rotate: 0 },
};

const springTransition = {
  type: 'spring',
  stiffness: 500,
  damping: 20,
  duration: 0.3,
  ease: 'easeInOut',
};

interface MenuIconProperties {
  isCross?: boolean;
}

const MenuIcon = ({ isCross = false }: MenuIconProperties) => {
  return (
    <motion.svg
      animate={isCross ? 'cross' : 'grid'}
      className={clsx(
        'h-full w-auto fill-current transition-colors duration-300 ease-in-out',
        isCross ? 'text-red-500' : 'text-neutral-200'
      )}
      initial='grid'
      transition={springTransition}
      variants={iconVariants}
      viewBox='0 0 100 100'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g
        className={clsx(
          'transition-opacity duration-300 ease-in-out',
          isCross ? 'opacity-0' : 'opacity-100'
        )}
      >
        <rect height='25' width='25' />
        <rect height='25' width='25' x='75' />
        <rect height='25' width='25' x='75' y='75' />
        <rect height='25' width='25' y='75' />
      </g>
      <rect className='' height='25' width='25' x='37.5' />
      <rect className='cls-1' height='25' width='25' x='37.5' y='75' />
      <rect className='' height='25' width='25' y='37.5' />
      <rect className='' height='25' width='25' x='37.5' y='37.5' />
      <rect className='' height='25' width='25' x='75' y='37.5' />
    </motion.svg>
  );
};

export default MenuIcon;
