import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
}

const Container = ({ children, as: Component = "div", className }: ContainerProps) => {
  return (
    <Component className={`w-full rounded-16 bg-neutral-0 border border-blue-100 py-250 px-200 flex flex-col gap-300 ${className}`}>
      {children}
    </Component>
  );
};

export default Container;
