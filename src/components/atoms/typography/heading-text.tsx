import { Heading as ChakraTextComponent } from "@chakra-ui/react";

interface HeaderTextProps extends React.ComponentProps<typeof ChakraTextComponent> {
  //Add additional prop definitions here
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const HeaderText = (props: HeaderTextProps) => {
  return (
    <ChakraTextComponent {...props} as={props.level} >
      {props.children}
    </ChakraTextComponent>
  );
};

export default HeaderText;