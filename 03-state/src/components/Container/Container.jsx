import clsx from 'clsx';

import './Container.css';

function Container({ children, flag }) {
  const classNames = clsx(
    'wrapper',
    flag ? ' special' : ''
  );

  return <div className={classNames}>{children}</div>;
}

export default Container;
