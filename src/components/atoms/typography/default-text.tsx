import React from "react";

// Define a type for the possible "as" values
type AsType = 'span' | 'p';

// Create a union type for the allowed props based on "as" value
type ElementProps = AsType extends 'span'
  ? React.HTMLAttributes<HTMLSpanElement>
  : React.HTMLAttributes<HTMLParagraphElement>;

interface DefaultTextProps extends ElementProps {
  as?: AsType;
}

const DefaultText = ({as = "p", className, children, ...props}: DefaultTextProps) => {
  if(as === "span"){
    return <span {...props} className={className}>{children}</span>;
  }
  else{
    return <p {...props} className={className}>{children}</p>;
  }
  
};

export default DefaultText;
