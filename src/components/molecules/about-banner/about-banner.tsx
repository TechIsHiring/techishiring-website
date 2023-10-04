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
      <div className="relative bottom-32 lg:bottom-14 px-10 lg:px-40 flex lg:justify-center mx-auto sm:w-[80%] lg:w-full">
        <div className="bg-[#0B2F4F] flex flex-1 lg:flex-auto flex-col lg:flex-row w-full p-8 gap-9 rounded-l-lg " >
          <div>
            <HeaderText data-cy={"about-banner-header"} level={"h4"} color={"white"} fontSize={"20px"}>Have a question?</HeaderText>
            <DefaultText className={"text-altWhite text-[16px]"}>If you have any questions, please contact us</DefaultText>
          </div>
          <div>
            <DefaultButton
              as={"a"}
              data-cy={"about-banner-button"}
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
            >
            Contact Us
            </DefaultButton>

          </div>
        </div>
        <div className="w-1/2 hidden lg:flex rounded-r-lg px-10 bg-white justify-center items-center shadow-md flex-col gap-3">
          <DefaultText className={"text-dark text-[16px]"}>Follow us on Social Media:</DefaultText>
          <div className="flex gap-12 w-full items-center justify-center">
            <Link href="https://www.twitter.com/TechIsHiring/">
              <Icon Icon={SiTwitter} iconAlt="Twitter for Tech Is Hiring" />
            </Link>
            <Link href="https://www.linkedin.com/company/TechIsHiring/">
              <Icon Icon={SiLinkedin} iconAlt="LinkedIn for Tech Is Hiring" />
            </Link>
            <Link href="https://www.youtube.com/@TechIsHiring">
              <Icon Icon={SiYoutube} iconAlt="YouTube for Tech Is Hiring"/>
            </Link>
          </div>
        </div>
      </div>
  )
}
