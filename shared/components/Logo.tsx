import clsx from 'clsx';

const Logo = () => {
  return (
    <svg
      className='h-full w-auto fill-current'
      viewBox='0 0 1826.19 1411.49'
      xmlns='http://www.w3.org/2000/svg'
    >
      <polygon
        className='text-neutral-200'
        points={clsx(
          '902.2 998.84 764.99 1236.49 389.71 1236.49 202.07 911.49 389.71 586.49 483.8 586.49',
          '764.99 586.49 967.06 586.49 866.03 411.49 288.68 411.49 0 911.49 288.68 1411.49 866.03',
          '1411.49 1104.27 998.84 902.2 998.84'
        )}
      />
      <polygon
        className='text-neutral-200'
        points={clsx(
          '1536.26 909.32 1772.58 500 1483.91 0 906.56 0 805.52 175 1007.59 175 1032.85 175',
          '1382.87 175 1570.51 500 1382.87 825 1079.7 825 1032.85 825 1007.59 825 805.52 825',
          '653.17 825 552.14 1000 906.56 1000 1079.7 1000 1386.55 1000 1624.12 1411.49 1826.19',
          '1411.49 1536.26 909.32'
        )}
      />
    </svg>
  );
};

export default Logo;
