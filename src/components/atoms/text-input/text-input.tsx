import { Input as ChakraInputComponent } from "@chakra-ui/react";

interface InputProps extends React.ComponentProps<typeof ChakraInputComponent> {
  //Add additional prop definitions here
}

const TextInput = (props: InputProps) => {
  return (
    <ChakraInputComponent
      {...props}
      className={`${props.className ? props.className : ""}`}
      borderColor="blackAlpha.500"
      focusBorderColor="blue.400"
      _hover={{ }}
    />
  );
};

export default TextInput;