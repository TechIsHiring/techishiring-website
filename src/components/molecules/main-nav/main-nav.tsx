import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button
} from "@chakra-ui/react";
import { Fragment } from "react";
import NavLink from "components/atoms/nav-link/nav-link";
import Icon from "components/atoms/icon/icon";
import { FiMenu, FiExternalLink } from "react-icons/fi";
import { useRouter } from "next/router";
import DefaultButton from "components/atoms/button/button";
interface MainNavProps {
  navList: NavLink[];
}

const MainNav = ({ navList }: MainNavProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  return (
    <nav aria-label="Main">
      <ul className="hidden items-center space-x-8 sm:flex">
        {navList.map((navItem, index) => {
          if (navItem.text !== "Contact Us") {
            return (
              <Fragment key={index}>
                <li className="flex items-center gap-2">
                  {navItem.externalLink && (
                    <Icon
                      Icon={FiExternalLink}
                      size={22}
                      iconAlt="external link for TechIsHiring newsletter"
                    />
                  )}
                  <NavLink
                    activeLink={router.pathname === navItem.url}
                    {...navItem}
                  />
                </li>
              </Fragment>
            );
          } else {
            return (
              <DefaultButton
                key={index}
                variant="solid"
                size="md"
                colorScheme="facebook"
                className=""
              >
                <span className="text-white">Contact Us</span>
              </DefaultButton>
            );
          }
        })}
      </ul>
      <div
        aria-label="Menu"
        aria-expanded="false"
        className="flex h-[70px] items-center sm:hidden"
        onClick={onOpen}
      >
        <Icon Icon={FiMenu} iconAlt="Mobile Nav Icon" />
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader></DrawerHeader>

            <DrawerBody>
              <ul>
                {navList.map((navItem, index) => (
                  <li
                    key={index}
                    className={`flex items-center justify-end space-x-2 py-2 text-right ${
                      index !== 0 && "border-t"
                    }`}
                  >
                    {navItem.externalLink && (
                      <Icon
                        Icon={FiExternalLink}
                        size={22}
                        iconAlt="external link for TechIsHiring newsletter"
                      />
                    )}
                    <NavLink {...navItem} />
                  </li>
                ))}
              </ul>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </div>
    </nav>
  );
};

export default MainNav;
