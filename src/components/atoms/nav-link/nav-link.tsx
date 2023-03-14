import DefaultText from "../typography/default-text";
import DefaultButton from "components/atoms/button/button";
import Link from "next/link";
type NavLinkProps = NavLink;

const NavLink = ({ url, text, activeLink, button, externalLink }: NavLinkProps) => {
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
        {button !== true && 
          <DefaultText fontSize="lg" as="span">
            {text}
          </DefaultText>
        }
        {button === true &&
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
        }
      </a>
    </Link>
  );
};

export default NavLink;
