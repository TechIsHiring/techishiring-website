import Link from "../../components/atoms/link/link";

const storyConfig = {
  title: "Design System/Atoms/Link"
};

export default storyConfig;

export const NavLinkStory = () =>
  <Link url="https://www.google.com" externalLink >
    <>Hello</>
  </Link>;
