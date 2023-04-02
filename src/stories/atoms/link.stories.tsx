import Link from "../../components/atoms/link/link";

const storyConfig = {
  title: "Design System/Atoms/Link"
};

export default storyConfig;

export const NavLinkStory = () => (
  <Link href="https://www.google.com" externalLink>
    <>Hello</>
  </Link>
);
