import { Fragment } from "react";
import Icon from "components/atoms/icon/icon";
import {
  SiTwitter,
  SiLinkedin,
  SiPatreon,
  SiSubstack,
  SiGithub
} from "react-icons/si";
import useMainNav from "lib/hooks/use-nav";
import { FiExternalLink } from "react-icons/fi";
import Link from "components/atoms/link/link";
import NavLink from "components/atoms/nav-link/nav-link";
import { Text } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import DefaultText from "components/atoms/typography/default-text";
import { Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

interface FooterProps {
  mobileNav: JSX.Element[];
}

const MobileFooter = ({ mobileNav }: FooterProps) => {
  return (
    <div className="flex flex-col items-center">

      {/* <div className="flex flex-col space-y-2">
        <DefaultText className="text-center font-inter text-lg font-semibold text-white">
          Subscribe to our Newsletter
        </DefaultText>
        <div className="flex items-center space-x-2 rounded-lg bg-white p-2">
          <Input
            focusBorderColor="white"
            placeholder="Enter your email address"
            border={0}
          />
          <Button size="sm" variant="ghost" colorScheme={"linkedin"} px={"8"}>
            Subscribe Now
          </Button>
        </div>
      </div> */}

      <div className="flex flex-col items-center justify-between space-y-6 py-7">
        {mobileNav.map(navElement => navElement)}
      </div>
      <Link href="/">
        <Text fontSize="xl" className="footer-logo">
          TechIsHiring
        </Text>
      </Link>
      <div className="my-4 w-full">
        <Divider colorScheme="gray" />
      </div>
      <div className="flex flex-col space-y-1">
        <div className="flex items-center justify-center space-x-8 pb-5">
          <a target="_blank" rel="noreferrer" href="https://www.twitter.com/techishiring">
            <Icon
              Icon={SiTwitter}
              iconAlt="Twitter for Tech Is Hiring"
              color="white"
              size={20}
            />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.github.com/techishiring">
            <Icon
              Icon={SiGithub}
              iconAlt="GitHub for Tech Is Hiring"
              color="white"
              size={20}
            />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/techishiring">
            <Icon
              Icon={SiLinkedin}
              iconAlt="LinkedIn for Tech Is Hiring"
              color="white"
              size={20}
            />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.patreon.com/techishiring">
            <Icon
              Icon={SiPatreon}
              iconAlt="Patreon for Tech Is Hiring"
              color="white"
              size={20}
            />
          </a>
          <a target="_blank" rel="noreferrer" href="https://newsletter.techishiring.com/">
            <Icon
              Icon={SiSubstack}
              iconAlt="Tech Is Hiring Newsletter on Substack"
              color="white"
              size={20}
            />
          </a>
        </div>
        <DefaultText className="pb-4 text-center font-inter text-xs font-medium text-white">
          {`© Copyright ${new Date().getFullYear()}, All rights reserved.`}
        </DefaultText>
        <DefaultText className="mx-auto w-[60%] text-center font-inter text-xs font-medium text-white">
          Website designed by Inetimi Ade (aidinetimi@gmail.com)
        </DefaultText>
      </div>
    </div>
  );
};

const DesktopFooter = ({ mobileNav }: FooterProps) => {
  return (
    <div className="flex flex-col items-center ">
      <Link href="/">
        <Text fontSize="xl" className="footer-logo">
          TechIsHiring
        </Text>
      </Link>
      <div className="mt-5">
        <div className="flex items-center justify-between space-x-4">
          {mobileNav.map(navElement => navElement)}
        </div>
      </div>
      <div className="mt-4 w-full">
        <Divider />
      </div>
      <div className="mt-10 flex w-full justify-end">

        {/* <div className="flex flex-col space-y-2 md:w-[50%] lg:w-[40%]">
          <DefaultText className="font-inter font-semibold text-white">
            Subscribe to our Newsletter
          </DefaultText>
          <div className="flex items-center space-x-2 rounded-lg bg-white p-2">
            <Input
              focusBorderColor="white"
              placeholder="Enter your email address"
              border={0}
            />
            <Button variant={"solid"} colorScheme={"facebook"} px={"8"}>
              Subscribe Now
            </Button>
          </div>
        </div> */}
        
        <div className="flex flex-col space-y-1">
          <div className="flex items-center justify-end space-x-8 pb-2">
            <a target="_blank" rel="noreferrer" href="https://www.twitter.com/techishiring">
              <Icon
                Icon={SiTwitter}
                iconAlt="Twitter for Tech Is Hiring"
                color="white"
                size={20}
              />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.github.com/techishiring">
              <Icon
                Icon={SiGithub}
                iconAlt="GitHub for Tech Is Hiring"
                color="white"
                size={20}
              />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/techishiring">
              <Icon
                Icon={SiLinkedin}
                iconAlt="LinkedIn for Tech Is Hiring"
                color="white"
                size={20}
              />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.patreon.com/techishiring">
              <Icon
                Icon={SiPatreon}
                iconAlt="Patreon for Tech Is Hiring"
                color="white"
                size={20}
              />
            </a>
            <a target="_blank" rel="noreferrer" href="https://newsletter.techishiring.com/">
              <Icon
                Icon={SiSubstack}
                iconAlt="Tech Is Hiring Newsletter on Substack"
                color="white"
                size={20}
              />
            </a>
          </div>
          <DefaultText className="text-right font-inter text-xs font-medium text-white lg:text-sm">
            {`© Copyright ${new Date().getFullYear()}, All rights reserved.`}
          </DefaultText>
          <DefaultText className="text-right font-inter text-xs font-medium text-white lg:text-sm">
            Website designed by Inetimi Ade (aidinetimi@gmail.com)
          </DefaultText>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  const navList = useMainNav();

  const navItems = navList.map((navItem, index) => {
    return (
      <Fragment key={index}>
        <li className="flex items-center gap-2">
          <NavLink {...navItem} footer />
          {navItem.externalLink && (
            <Icon
              Icon={FiExternalLink}
              color="white"
              size={22}
              iconAlt={navItem.externalLinkAlt ?? ""}
            />
          )}
        </li>
      </Fragment>
    );
  });

  return (
    <footer className="flex justify-center w-full bg-[#134D82]">
      <div data-cy="desktop-footer" className="hidden w-full md:block 3xl:w-max-screen-size px-4 pt-6 pb-8 md:px-5 md:pb-16 lg:px-14">
        <DesktopFooter mobileNav={navItems} />
      </div>
      <div data-cy="mobile-footer" className="md:hidden">
        <MobileFooter mobileNav={navItems}/>
      </div>
    </footer>
  );
};

export default Footer;
