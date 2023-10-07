import React from "react";

interface TextboxProps extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  //Add additional prop definitions here
}

const TextBox = ({className, ...props}: TextboxProps) => {
  return (
    <textarea {...props} className={(className ? `${className}` : ``) +
    ` outline outline-2 outline-transparent outline-offset-2 relative appearance-none min-h-[5rem] leading-snug align-top text-base py-2 px-4 rounded-md border border-black/[.36] bg-inherit transition duration-200 focus:border-[#4299e1] focus:z-[1] focus:shadow-[0_0_0_1px_#4299e1]`} />
  );
};

export default TextBox;