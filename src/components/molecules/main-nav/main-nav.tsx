import NavLink from "components/atoms/nav-link/nav-link";

interface MainNavProps {
  navList: NavLink[];
}

const MainNav = ({ navList }: MainNavProps) => {
  return (
    <nav className="">
      <ul>
        {navList.map(navItem =>
          <li>
            <NavLink {...navItem} />
          </li>
        )}
      </ul>
    </nav>
  );
};

export default MainNav;