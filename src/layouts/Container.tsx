import React from "react";

const Container: React.FC<ContainerPropsInterface> = ({
  children,
  classNames,
}) => {
  return (
    <section className={`max-w-container mx-auto px-10 ${classNames}`}>
      {children}
    </section>
  );
};

export default Container;
