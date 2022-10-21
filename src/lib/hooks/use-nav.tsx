const useMainNav = () => {
  
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
    }
  ];
  
  return navList; 
};

export default useMainNav;