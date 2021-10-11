import React, { ReactNode } from 'react';

type Props = {
  title: string;
  children: ReactNode;
  containerClassName?: string;
  titleClassName?: string;
  contentClassName?: string;
};

const Section: React.FC<Props> = ({
  title,
  children,
  containerClassName,
  titleClassName,
  contentClassName,
}) => {
  return (
    <div className={`p-4 ${containerClassName || ''}`}>
      <h1 className={`text-3xl font-bold ${titleClassName || ''}`}>{title}</h1>
      <div className={`text-lg font-semibold ${contentClassName || ''}`}>
        {children}
      </div>
    </div>
  );
};

export default Section;
