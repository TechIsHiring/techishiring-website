import Icon from "components/atoms/icon/icon";
import { SiTwitter, SiLinkedin, SiPatreon, SiRevue, SiGithub } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="flex h-24 gap-4 w-full items-center justify-center border-t">
      <Icon Icon={SiTwitter} iconAlt="TechIsHiring Twitter" url="https://www.twitter.com/techishiring" />
      <Icon Icon={SiLinkedin} iconAlt="TechIsHiring LinkedIn" url="https://www.linkedin.com/company/techishiring" />
      <Icon Icon={SiPatreon} iconAlt="TechIsHiring Patreon" url="https://www.patreon.com/techishiring" />
      <Icon Icon={SiRevue} iconAlt="TechIsHiring Revue" size={48} url="https://www.getrevue.co/profile/techishiring" />
      <Icon Icon={SiGithub} iconAlt="TechIsHiring GitHub" url="https://www.github.com/techishiring" />
    </footer>
  );
};

export default Footer;