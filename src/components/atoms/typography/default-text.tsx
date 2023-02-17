import { Text as ChakraTextComponent } from "@chakra-ui/react";

interface DefaultTextProps
  extends React.ComponentProps<typeof ChakraTextComponent> {
  //Add additional prop definitions here
}

const DefaultText = (props: DefaultTextProps) => {
  return <ChakraTextComponent {...props}>{props.children}</ChakraTextComponent>;
};

export default DefaultText;
