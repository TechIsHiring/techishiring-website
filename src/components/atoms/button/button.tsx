import { Button as ChakraButtonComponent } from "@chakra-ui/react";

interface ButtonProps extends React.ComponentProps<typeof ChakraButtonComponent> {
  //Add additional prop definitions here
}

const DefaultButton = (props: ButtonProps) => {
  return (
    <ChakraButtonComponent {...props} >
      {props.children}
    </ChakraButtonComponent>
  );
};

export default DefaultButton;