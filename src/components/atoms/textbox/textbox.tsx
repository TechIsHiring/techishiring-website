import { Textarea as ChakraTextboxComponent } from "@chakra-ui/react";
import React from "react";

interface TextboxProps extends React.ComponentProps<typeof ChakraTextboxComponent> {
  //Add additional prop definitions here
}

type Textbox = TextboxProps;

const TextBox = (props: Textbox) => {
  return (
    <ChakraTextboxComponent
      {...props}
      className={`${props.className ? props.className : ""}`}
      borderColor="blackAlpha.500"
      focusBorderColor="blue.400"
      _hover={{ }}
    />
  );
};

export default TextBox;