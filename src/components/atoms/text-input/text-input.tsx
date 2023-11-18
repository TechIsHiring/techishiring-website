import React from "react";
import { Input as ChakraInputComponent } from "@chakra-ui/react";

interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  //Add additional prop definitions here
  isInvalid: boolean;
}

const TextInput = ({className = "", isInvalid = false, ...props}: InputProps) => {
  return (
    <input {...props} className={`${className} ` + (isInvalid ? `border-[#E53E3E] shadow-[0_0_0_1px_#E53E3E] ` : `border-black/[.36] `) +
    `outline outline-2 outline-transparent outline-offset-2 relative appearance-none text-base px-4 h-10 rounded-md border bg-inherit transition duration-200 focus:border-[#4299e1] focus:z-[1] focus:shadow-[0_0_0_1px_#4299e1] mt-2`}  />    
  );
};

export default TextInput;
