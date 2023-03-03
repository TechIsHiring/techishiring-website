import Icon from "components/atoms/icon/icon";
import {
  SiTwitter,
  SiLinkedin,
  SiPatreon,
  SiRevue,
  SiGithub,
  SiYoutube
} from "react-icons/si";
import Link from "components/atoms/link/link";

const Footer = () => {
  return (
    <footer className="flex h-24 w-full items-center justify-center gap-4 border-t">
      <Link url="https://www.twitter.com/techishiring">
        <Icon
          Icon={SiTwitter}
          iconAlt="Twitter for Tech Is Hiring"
        />
      </Link>
      <Link url="https://www.linkedin.com/company/techishiring">
        <Icon
          Icon={SiLinkedin}
          iconAlt="LinkedIn for Tech Is Hiring"
        />
      </Link>
      <Link url="https://www.patreon.com/techishiring">
        <Icon
          Icon={SiPatreon}
          iconAlt="Patreon for Tech Is Hiring"
        />
      </Link>
      <Link url="https://www.getrevue.co/profile/techishiring">
        <Icon
          Icon={SiRevue}
          iconAlt="Revue for Tech Is Hiring"
          size={48}
        />
      </Link>
      <Link url="https://www.github.com/techishiring">
        <Icon
          Icon={SiGithub}
          iconAlt="GitHub for Tech Is Hiring"
        />
      </Link>
      <Link url="https://www.youtube.com/@techishiring">
        <Icon
          Icon={SiYoutube}
          iconAlt="YouTube for Tech Is Hiring"
        />
      </Link>
    </footer>
  );
};

export default Footer;
