import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
}

const Container = ({ children, as: Component = 'div', className }: ContainerProps) => {
  return (
    <Component
      className={`${className} rounded-16 bg-neutral-0 flex w-full flex-col gap-300 border border-blue-100 px-200 py-250`}
    >
      {children}
    </Component>
  );
};

export default Container;
