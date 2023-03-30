import DefaultText from "../typography/default-text";
import DefaultButton from "components/atoms/button/button";
import Link from "next/link";
type NavLinkProps = NavLink;

const NavLink = ({ url, text, activeLink, button, externalLink, footer = false }: NavLinkProps) => {
  return (
    <Link
      href={url}
      passHref
      target={externalLink ? "_blank" : "_self"}
      rel="noreferrer"
    >
      <a
        className={`${
          activeLink ? "border-b-2 border-blue-500 text-blue-500" : footer ? "text-white" : "text-black"
        } font-inter  font-semibold`}
      >
        {footer === false && button === true ?
          <DefaultButton
            variant="solid"
            size="md"
            colorScheme="facebook"
            className=""
          >
            <DefaultText className="text-white" fontSize="lg" as="span">
              {text}
            </DefaultText>
          </DefaultButton>
        : 
          <DefaultText fontSize="lg" as="span">
            {text}
          </DefaultText>
        }
      </a>
    </Link>
  );
};

export default NavLink;
