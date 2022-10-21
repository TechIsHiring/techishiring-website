type NavLinkProps = NavLink;

const NavLink = ({ url, text, activeLink, externalLink }: NavLinkProps) => {
  return (
    <a
      className={`${activeLink ? console.log(activeLink) : ""} text-xl font-semibold`}
      href={url}
      target={externalLink ? "_blank" : "_self"} >
        {text}
    </a>
  );
};

export default NavLink;