import NextLink from "next/link";

interface NextLinkProps
  extends React.ComponentProps<typeof NextLink> {
  //Add additional prop definitions here
}

interface LinkProps extends Link, NextLinkProps {
  children: JSX.Element;
}

const Link = (props: LinkProps) => {
  return (
    <NextLink
      {...props}
      passHref
      className={`${props.activeLink ? console.log(props.activeLink) : ""} h-fit`}
    >
      {props.children}
    </NextLink>
  );
};

export default Link;
