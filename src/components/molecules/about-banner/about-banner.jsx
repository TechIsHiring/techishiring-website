import React from 'react'
import DefaultText from "components/atoms/typography/default-text";
import HeaderText from "components/atoms/typography/heading-text";
import DefaultButton from "components/atoms/button/button";
import {
  Flex,
  Divider,
  Box,
} from "@chakra-ui/react";
import Link from "components/atoms/link/link";
import Icon from "components/atoms/icon/icon";
import { 
  SiTwitter,
  SiLinkedin,
  SiFacebook
} from "react-icons/si";

export default function AboutBanner() {
  return (
      <div className="relative bottom-32 md:bottom-14 px-10 lg:px-40 flex md:justify-center mx-auto sm:w-[80%] md:w-full">
        <div className="bg-[#0B2F4F] flex flex-1 md:flex-auto flex-col md:flex-row w-full p-8 gap-9 rounded-l-lg " >
          <div>
            <HeaderText level={"h4"} color={"white"} fontSize={"20px"}>Have a question ?</HeaderText>
            <DefaultText className={"text-altWhite text-[16px]"}>If you have any questions , please contact us</DefaultText>
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
            >
            Contact Us
            </DefaultButton>

          </div>
        </div>
        <div className="w-1/2 hidden md:flex rounded-r-lg px-10 bg-white justify-center items-center shadow-md flex-col gap-3">
          <DefaultText className={"text-dark text-[16px]"}>Follow us on Social Media:</DefaultText>
          <Flex className="flex gap-12 w-full items-center justify-center">      
            <Icon Icon={SiTwitter} iconAlt="Twitter for Tech Is Hiring" url="https://www.twitter.com/techishiring" className={"text-primary"}/>
            <Icon Icon={SiLinkedin} iconAlt="LinkedIn for Tech Is Hiring" url="https://www.linkedin.com/company/techishiring" className={""} />
            <Icon Icon={SiFacebook} iconAlt="LinkedIn for Tech Is Hiring" url="https://www.linkedin.com/company/techishiring" className={"text-primary"}/>
          </Flex>
        </div>
      </div>
  )
}
