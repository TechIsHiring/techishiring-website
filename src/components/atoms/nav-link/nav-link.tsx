import DefaultText from "../typography/default-text";
import Link from "next/link";
type NavLinkProps = NavLink;

const NavLink = ({ url, text, activeLink, externalLink }: NavLinkProps) => {
  return (
    <Link
      href={url}
      passHref
      target={externalLink ? "_blank" : "_self"}
      rel="noreferrer"
    >
      <a
        className={`${
          activeLink ? "border-b-2 border-blue-500 text-blue-500" : "text-black"
        } font-inter  font-semibold`}
      >
        <DefaultText fontSize="lg" as="span">
          {text}
        </DefaultText>
      </a>
    </Link>
  );
};

export default NavLink;
