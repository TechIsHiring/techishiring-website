const useMainNav = () => {
  const navList: NavLink[] = [
    {
      url: "/",
      text: "Home"
    },
    {
      url: "https://newsletter.techishiring.com/",
      text: "Newsletter",
      externalLink: true,
      externalLinkAlt: "external link for TechIsHiring Newsletter"
    },
    {
      url: "/about",
      text: "About"
    },
    {
      url: "/contact",
      text: "Contact Us",
      button: true
    }
  ];

  return navList;
};

export default useMainNav;
