import React from "react";

// Define a type for the possible "as" values
type AsType = 'a' | 'button';

// Create a union type for the allowed props based on "as" value
type ElementProps = AsType extends 'a'
  ? React.AnchorHTMLAttributes<HTMLAnchorElement>
  : React.ButtonHTMLAttributes<HTMLButtonElement>;

interface ButtonProps extends ElementProps {
  as?: AsType;
  href?: string;
}

const DefaultButton = ({as = "button", children, className, ...props}: ButtonProps) => {
  if( as === "a"){
    const {...anchorProps} = props as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a {...anchorProps} className={(className ? `${className}` : ``) +
      ` inline-flex appearance-none items-center justify-center relative whitespace-nowrap align-middle outline outline-2 outline-transparent outline-offset-2 leading-tight font-semibold transition duration-200 h-10 min-w-[2.5rem] text-base px-4 py-3`}>
        {children}
      </a>
    )
  }
  else{
    const {...buttonProps} = props as React.ButtonHTMLAttributes<HTMLButtonElement>;
    return (
      <button {...buttonProps} className={(className ? `${className}` : ``) +
      ` inline-flex appearance-none items-center justify-center relative whitespace-nowrap align-middle outline outline-2 outline-transparent outline-offset-2 leading-tight font-semibold transition duration-200 h-10 min-w-[2.5rem] text-base px-4 py-3`}>
        {children}
      </button>
    )
  }
};

export default DefaultButton;
