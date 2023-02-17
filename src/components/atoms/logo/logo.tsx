import Image from "next/image";
import Link from "components/atoms/link/link";
import TechIsHiringLogo from "../../../images/techishiring-logo.png";
import { Text } from "@chakra-ui/react";

const Logo = () => {
  return (
    <Link url="/">
      <a>
        <Text fontSize="2xl" className="logo">
          TechIsHiring
        </Text>
      </a>
    </Link>
  );
};

export default Logo;
