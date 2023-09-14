import Link from "components/atoms/link/link";
import { Heading } from "@chakra-ui/react";

const Logo = () => {
  return (
    <Link href="/">
      <Heading as="h1" fontSize="1.5em" fontFamily="HirukoPro-Black" className="logo">
        TechIsHiring
      </Heading>
    </Link>
  );
};

export default Logo;
