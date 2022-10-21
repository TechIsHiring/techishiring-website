import NavLink from "components/atoms/nav-link/nav-link";
import Icon from "components/atoms/icon/icon";
import { FiMenu } from "react-icons/fi";

interface MainNavProps {
  navList: NavLink[];
}

const MainNav = ({ navList }: MainNavProps) => {
  return (
    <nav aria-label="Main">
      <ul className="md:flex gap-4 hidden">
        {navList.map((navItem, index) =>
          <>
            <li>
              <NavLink {...navItem} />
            </li>
            {index != navList.length - 1 && <span>|</span>}
          </>
        )}
      </ul>
      <div aria-label="Menu" aria-expanded="false" className="md:hidden h-[70px] flex items-center">
        <Icon Icon={FiMenu} iconAlt="Mobile Nav Icon" />
      </div>
    </nav>
  );
};

export default MainNav;