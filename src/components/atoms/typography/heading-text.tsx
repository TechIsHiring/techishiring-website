import React from "react";

type Level = Extract<keyof JSX.IntrinsicElements, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>;

interface HeaderTextProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  level: Level;
}

const HeaderText = ({level: HeadingLevel, className, children, ...props}: HeaderTextProps) => {
  return (
    <HeadingLevel {...props} className={className}>
      {children}
    </HeadingLevel>
  );
};

export default HeaderText;
