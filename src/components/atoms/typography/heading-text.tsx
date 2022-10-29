import { Heading as ChakraHeaderTextComponent } from "@chakra-ui/react";

interface HeaderTextProps extends React.ComponentProps<typeof ChakraHeaderTextComponent> {
  //Add additional prop definitions here
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const HeaderText = (props: HeaderTextProps) => {
  return (
    <ChakraHeaderTextComponent {...props} as={props.level} >
      {props.children}
    </ChakraHeaderTextComponent>
  );
};

export default HeaderText;