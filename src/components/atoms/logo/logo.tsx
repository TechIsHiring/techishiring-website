import Image from "next/image";
import TechIsHiringLogo from "../../../images/techishiring-logo.png";

const Logo = () => {
  return (
    <Image className="rounded-lg" src={TechIsHiringLogo} alt="TechIsHiring logo" />
  );
};

export default Logo;