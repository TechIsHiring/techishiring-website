import { Input as ChakraInputComponent } from "@chakra-ui/react";

interface InputProps extends React.ComponentProps<typeof ChakraInputComponent> {
  //Add additional prop definitions here
}

const TextInput = (props: InputProps) => {
  return (
    <ChakraInputComponent {...props} />
  );
};

export default TextInput;