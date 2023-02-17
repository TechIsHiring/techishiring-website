const useMobileNav = () => {
  const navList: NavLink[] = [
    {
      url: "/",
      text: "Home"
    },
    {
      url: "/newsletter",
      text: "Newsletter"
    },
    {
      url: "/about",
      text: "About"
    },
    {
      url: "/contact",
      text: "Contact Us"
    }
  ];

  return navList;
};

export default useMobileNav;
