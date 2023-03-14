import Icon from "components/atoms/icon/icon";
import {
  SiTwitter,
  SiLinkedin,
  SiPatreon,
  SiSubstack,
  SiGithub
} from "react-icons/si";
import Link from "components/atoms/link/link";
import { Text } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import DefaultText from "components/atoms/typography/default-text";
import { Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

const mobileFooter = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col space-y-2">
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
      </div>
      <div className="flex flex-col items-center justify-between space-y-6 py-7">
        <Link url="/about">
          <Text className="cursor-pointer font-inter text-base text-white">
            About
          </Text>
        </Link>
        <Link url="/">
          <Text className="cursor-pointer font-inter text-base text-white">
            Home
          </Text>
        </Link>
        <Link url="https://techishiring.substack.com/">
          <Text className="cursor-pointer font-inter text-base text-white">
            Newsletter
          </Text>
        </Link>
        <Link url="#">
          <Text className="cursor-pointer font-inter text-base text-white">
            Jobs
          </Text>
        </Link>
      </div>
      <Link url="/">
        <a>
          <Text fontSize="xl" className="footer-logo">
            TechIsHiring
          </Text>
        </a>
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
          <a target="_blank" rel="noreferrer" href="https://techishiring.substack.com/">
            <Icon
              Icon={SiSubstack}
              iconAlt="Substack for Tech Is Hiring"
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

const desktopFooter = () => {
  return (
    <div className="flex flex-col items-center ">
      <Link url="/">
        <a>
          <Text fontSize="xl" className="footer-logo">
            TechIsHiring
          </Text>
        </a>
      </Link>
      <div className="mt-5 w-[40%]">
        <div className="flex  items-center justify-between space-x-4">
          <Link url="/about">
            <Text className="cursor-pointer font-inter text-base text-white">
              About
            </Text>
          </Link>
          <Link url="/">
            <Text className="cursor-pointer font-inter text-base text-white">
              Home
            </Text>
          </Link>
          <Link url="https://techishiring.substack.com/">
            <Text className="cursor-pointer font-inter text-base text-white">
              Newsletter
            </Text>
          </Link>
          <Link url="#">
            <Text className="cursor-pointer font-inter text-base text-white">
              Jobs
            </Text>
          </Link>
        </div>
      </div>
      <div className="mt-4 w-full">
        <Divider />
      </div>
      <div className="mt-10 flex w-full justify-between">
        <div className="flex flex-col space-y-2 md:w-[50%] lg:w-[40%]">
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
        </div>
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
            <a target="_blank" rel="noreferrer" href="https://techishiring.substack.com/">
              <Icon
                Icon={SiSubstack}
                iconAlt="Substack for Tech Is Hiring"
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
  return (
    <footer className="w-full bg-[#134D82] px-4 pt-6 pb-8 md:px-5 md:pb-16 lg:px-14">
      <div className="hidden md:block">{desktopFooter()}</div>
      <div className="md:hidden">{mobileFooter()}</div>
    </footer>
  );
};

export default Footer;
