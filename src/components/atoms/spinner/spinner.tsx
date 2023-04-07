import { Spinner as ChakraSpinnerComponent } from "@chakra-ui/react";
import React from "react";

interface SpinnerProps extends React.ComponentProps<typeof ChakraSpinnerComponent> {
  //Add additional prop definitions here
}

const Spinner = (props: SpinnerProps) => {
  return (
    <ChakraSpinnerComponent
      {...props}
      thickness='4px'
      speed='0.65s'
      emptyColor='gray.200'
      color='blue.500'
      size='xl'
    />
  );
};

export default Spinner;
