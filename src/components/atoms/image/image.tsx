import { Image as ChakraImageComponent } from "@chakra-ui/react";

interface ImageProps extends React.ComponentProps<typeof ChakraImageComponent> {
  //Add additional prop definitions here
}

const DefaultImage = (props: ImageProps) => {
  return (
    <ChakraImageComponent {...props} />
  );
};

export default DefaultImage;