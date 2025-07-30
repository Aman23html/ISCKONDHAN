import React from 'react';
import classNames from 'classnames';

export const Button = ({
  children,
  className,
  variant = 'primary',
  ...props
}) => {
  const base =
    'px-4 py-2 rounded-md text-sm font-medium transition duration-200 focus:outline-none';

  const variants = {
    primary: 'bg-green-600 hover:bg-green-700 text-white',
    secondary: 'bg-gray-100 hover:bg-gray-200 text-black',
    ghost: 'bg-transparent text-gray-700 hover:underline',
  };

  return (
    <button
      className={classNames(base, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};
