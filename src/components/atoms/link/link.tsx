import NextLink from "next/link";

interface LinkProps extends Link {
  children: JSX.Element;
};

const Link = ({ url, children, activeLink, externalLink }: LinkProps) => {
  return (
    <NextLink
      passHref
      className={`${activeLink ? console.log(activeLink) : ""} h-fit`}
      href={url}
      target={externalLink ? "_blank" : "_self"} rel="noreferrer" >
      {children}
    </NextLink>
  );
};

export default Link;