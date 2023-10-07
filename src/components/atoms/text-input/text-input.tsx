import React from "react";

interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  //Add additional prop definitions here
}

const TextInput = ({className, ...props}: InputProps) => {
  return (
    <input {...props} className={(className ? `${className}` : ``) +
    ` outline outline-2 outline-transparent outline-offset-2 relative appearance-none text-base px-4 h-10 rounded-md border border-black/[.36] bg-inherit transition duration-200 focus:border-[#4299e1] focus:z-[1] focus:shadow-[0_0_0_1px_#4299e1]`}  />    
  );
};

export default TextInput;
