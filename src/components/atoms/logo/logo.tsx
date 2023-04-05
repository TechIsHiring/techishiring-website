import Link from "components/atoms/link/link";
import { Text } from "@chakra-ui/react";

const Logo = () => {
  return (
    <Link href="/">
      <Text fontSize="2xl" className="logo">
        TechIsHiring
      </Text>
    </Link>
  );
};

export default Logo;
