import DefaultText from "../typography/default-text";
import DefaultButton from "components/atoms/button/button";
import Link from "components/atoms/link/link";
type NavLinkProps = NavLink;

const NavLink = ({ url, text, activeLink, button, externalLink, footer = false }: NavLinkProps) => {
  return (
    <Link
      href={url}
      passHref
      target={externalLink ? "_blank" : "_self"}
      rel="noreferrer"
      className={`${footer ? "text-white" : "text-black"} font-inter  font-semibold`}
    >
      {footer === false && button === true ?
        <DefaultButton
          className=""
          variant="solid"
          size="md"
          colorScheme="facebook"
        >
          <DefaultText className="text-white" fontSize="lg" as="span">
            {text}
          </DefaultText>
        </DefaultButton>
      : 
        <DefaultText
          className={`${activeLink ? "border-b-2 border-blue-500 text-blue-500" : ""}`}
          fontSize="lg"
          as="span">
          {text}
        </DefaultText>
      }
    </Link>
  );
};

export default NavLink;
