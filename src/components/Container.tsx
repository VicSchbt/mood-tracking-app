import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="w-full rounded-16 bg-neutral-0 border border-blue-100 py-250 px-200">
      {children}
    </div>
  );
};

export default Container;
