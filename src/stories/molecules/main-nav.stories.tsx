import MainNav from "../../components/molecules/main-nav/main-nav";

const storyConfig = {
  title: "Design System/Molecules/Main Nav"
};

const navList: NavLink[] = [
  {
    url: "https://www.google.com",
    text: "test",
    externalLink: true
  },
  {
    url: "https://www.google.com",
    text: "test 2"
  }
];

export default storyConfig;

export const MainNavStory = () => <MainNav navList={navList} />;
