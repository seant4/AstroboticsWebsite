import React, { ReactNode } from 'react';

type Props = {
  title: string;
  subtitle?: string;
  children: ReactNode;
  containerClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  contentClassName?: string;
};

const Section: React.FC<Props> = ({
  title,
  subtitle,
  children,
  containerClassName,
  titleClassName,
  subtitleClassName,
  contentClassName,
}) => {
  return (
    <div className={`p-4 ${containerClassName || ''}`}>
      <h1
        className={`text-4xl font-semibold text-center ${titleClassName || ''}`}
      >
        {title}
      </h1>
      {subtitle && (
        <h2
          className={`text-2xl font-light text-center ${
            subtitleClassName || ''
          }`}
        >
          {subtitle}
        </h2>
      )}
      <div className={`text-xl font-regular text-gray-800 mt-2 ${contentClassName || ''}`}>
        {children}
      </div>
    </div>
  );
};

export default Section;
