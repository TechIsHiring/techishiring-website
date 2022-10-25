interface LinkProps extends Link {
  children: JSX.Element;
};

const Link = ({ url, children, activeLink, externalLink }: LinkProps) => {
  return (
    <a
      className={`${activeLink ? console.log(activeLink) : ""}`}
      href={url}
      target={externalLink ? "_blank" : "_self"} rel="noreferrer" >
      {children}
    </a>
  );
};

export default Link;