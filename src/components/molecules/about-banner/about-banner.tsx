import React from 'react'
import DefaultText from "components/atoms/typography/default-text";
import HeaderText from "components/atoms/typography/heading-text";
import DefaultButton from "components/atoms/button/button";
import Link from 'components/atoms/link/link';
import Icon from "components/atoms/icon/icon";
import { 
  SiTwitter,
  SiLinkedin,
  SiYoutube
} from "react-icons/si";

export default function AboutBanner() {
  return (
    <div className="relative bottom-32 mx-auto flex px-10 sm:w-[80%] lg:bottom-14 lg:w-full lg:justify-center lg:px-40">
      <div className="flex w-full flex-1 flex-col gap-9 rounded-l-lg bg-[#0B2F4F] p-8 lg:flex-auto lg:flex-row ">
        <div>
          <HeaderText
            data-test="about-banner-header-text"
            level={"h4"}
            color={"white"}
            fontSize={"20px"}
          >
            Have a question?
          </HeaderText>
          <DefaultText
            data-test="about-banner-text"
            className={"text-[16px] text-altWhite"}
          >
            If you have any questions, please contact us
          </DefaultText>
        </div>
        <div>
          <DefaultButton
            as={"a"}
            href={"/contact"}
            w={"100%"}
            py={3}
            color={"white"}
            borderRadius={"8px"}
            background={"transparent"}
            border={"2px"}
            borderColor={"white"}
            _hover={{
              background: "transparent"
            }}
            data-test="about-banner-button"
          >
            Contact Us
          </DefaultButton>
        </div>
      </div>
      <div className="hidden w-1/2 flex-col items-center justify-center gap-3 rounded-r-lg bg-white px-10 shadow-md lg:flex">
        <DefaultText className={"text-[16px] text-dark"}>
          Follow us on Social Media:
        </DefaultText>
        <div className="flex w-full items-center justify-center gap-12">
          <Link href="https://www.twitter.com/TechIsHiring/">
            <Icon
              Icon={SiTwitter}
              data-test="about-details-icon-twitter"
              iconAlt="Twitter for Tech Is Hiring"
            />
          </Link>
          <Link href="https://www.linkedin.com/company/TechIsHiring/">
            <Icon
              data-test="about-details-icon-linkedIn"
              Icon={SiLinkedin}
              iconAlt="LinkedIn for Tech Is Hiring"
            />
          </Link>
          <Link href="https://www.youtube.com/@TechIsHiring">
            <Icon
              data-test="about-details-icon-youtube"
              Icon={SiYoutube}
              iconAlt="YouTube for Tech Is Hiring"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
