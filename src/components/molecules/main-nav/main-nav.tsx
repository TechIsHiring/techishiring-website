import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure
} from "@chakra-ui/react";
import { Fragment } from "react";
import NavLink from "components/atoms/nav-link/nav-link";
import Icon from "components/atoms/icon/icon";
import { FiMenu } from "react-icons/fi";
import { useRouter } from "next/router";

interface MainNavProps {
  navList: NavLink[];
}

const MainNav = ({ navList }: MainNavProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  return (
    <nav aria-label="Main">
      <ul className="lg:flex gap-4 hidden">
        {navList.map((navItem, index) =>
          <Fragment key={index}>
            <li>
              <NavLink activeLink={router.pathname === navItem.url} {...navItem} />
            </li>
          </Fragment>
        )}
      </ul>
      <div aria-label="Menu" aria-expanded="false" className="lg:hidden h-[70px] flex items-center" onClick={onOpen}>
        <Icon Icon={FiMenu} iconAlt="Mobile Nav Icon" />
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader></DrawerHeader>

            <DrawerBody>
              <ul>
                {navList.map((navItem, index) =>
                  <li key={index} className={`py-2 text-right ${index !== 0 && "border-t"}`}>
                    <NavLink {...navItem} />
                  </li>
                )}
              </ul>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </div>
    </nav>
  );
};

export default MainNav;