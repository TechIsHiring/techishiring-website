import NextLink from "next/link";

interface LinkProps extends Link {
  children: JSX.Element;
};

const Link = ({ url, children, activeLink }: LinkProps) => {
  return (
    <NextLink
      passHref
      className={`${activeLink ? console.log(activeLink) : ""} h-fit`}
      href={url}>
      {children}
    </NextLink>
  );
};

export default Link;