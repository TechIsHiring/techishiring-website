import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure
} from '@chakra-ui/react';
import { Fragment, useRef } from 'react';
import NavLink from "components/atoms/nav-link/nav-link";
import Icon from "components/atoms/icon/icon";
import { FiMenu } from "react-icons/fi";

interface MainNavProps {
  navList: NavLink[];
}

const MainNav = ({ navList }: MainNavProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef();

  return (
    <nav aria-label="Main">
      <ul className="md:flex gap-4 hidden">
        {navList.map((navItem, index) =>
          <Fragment key={index}>
            <li>
              <NavLink {...navItem} />
            </li>
            {index != navList.length - 1 && <span>|</span>}
          </Fragment>
        )}
      </ul>
      <div aria-label="Menu" aria-expanded="false" className="md:hidden h-[70px] flex items-center" onClick={onOpen}>
        <Icon Icon={FiMenu} iconAlt="Mobile Nav Icon" />
        <Drawer
        isOpen={isOpen}
        placement='right'
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