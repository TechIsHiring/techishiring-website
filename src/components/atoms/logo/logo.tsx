import Image from "next/image";
import Link from "components/atoms/link/link";
import TechIsHiringLogo from "../../../images/techishiring-logo.png";

const Logo = () => {
  return (
    <Link url="/">
      <Image className="rounded-lg" src={TechIsHiringLogo} alt="TechIsHiring logo" />
    </Link>
  );
};

export default Logo;