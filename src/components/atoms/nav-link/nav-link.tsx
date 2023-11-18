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
          className="text-white rounded-md bg-[#385898] hover:bg-[#314E89] active:bg-[#29487D] focus-visible:shadow-[0_0_0_3px_rgb(66,153,225,0.6)]"
        >
          <DefaultText className="text-white text-lg leading-[21.6px]" as="span">
            {text}
          </DefaultText>
        </DefaultButton>
      : 
        <DefaultText
          className={`${activeLink ? "border-b-2 border-blue-500 text-blue-500" : ""} text-lg`}
          as="span">
          {text}
        </DefaultText>
      }
    </Link>
  );
};

export default NavLink;
