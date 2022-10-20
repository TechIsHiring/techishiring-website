type NavLinkProps = NavLink;

const NavLink = ({ url, text, activeLink, externalLink }: NavLinkProps) => {
  return (
    <a
      className={`${activeLink ? console.log(activeLink) : ""}`}
      href={url}
      target={externalLink ? "_blank" : "_self"} >
        {text}
    </a>
  );
};

export default NavLink;