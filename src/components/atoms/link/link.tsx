interface LinkProps extends Link {
  children: JSX.Element;
  ref: any;
};

const Link = ({ url, children, ref, activeLink, externalLink }: LinkProps) => {
  return (
    <a
      ref={ref}
      className={`${activeLink ? console.log(activeLink) : ""}`}
      href={url}
      target={externalLink ? "_blank" : "_self"} >
        {children}
    </a>
  );
};

export default Link;