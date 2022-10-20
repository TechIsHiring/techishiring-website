import Image from "next/image";
import TechIsHiringLogo from "../../../images/techishiring-logo.png";

const Logo = () => {
  return (
    <a href={process.env.NEXT_PUBLIC_URL}>
      <Image className="rounded-lg" src={TechIsHiringLogo} alt="TechIsHiring logo" />
    </a>
  );
};

export default Logo;