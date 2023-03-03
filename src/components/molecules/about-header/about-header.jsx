import React from 'react'
import HeaderText from "components/atoms/typography/heading-text";
import { aboutImage, aboutMobileImage } from "images/Index";
import { useBreakpointValue } from "@chakra-ui/react";

export default function AboutHeader() {

    // const backgroundImage = useBreakpointValue({
    //     base: `url(${aboutMobileImage.src})`,
    //     md: `url(${aboutImage.src})`,
    // });

  return (
    <div
        className="flex w-full bg-center h-screen md:h-[80vh] bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${aboutImage.src})` }}
    >
        <div className="w-full flex flex-col items-center justify-center px-[18px] lg:px-0 bg-gradient-to-r from-black/60  to-transparent gap-4">
            
            <HeaderText level={"h1"} className={"text-white"} fontWeight={"extrabold"} fontSize={{base: "39px", md:"56px"}}>
                Transnational <span className="text-[#7AB8F1]">Job Listing</span> Channel
            </HeaderText>

            <div className="text-white flex justify-start items-start px-5 w-full lg:w-[40%] text-left lg:text-center">
              <p className="">
                So many jobs available, all you have to do is keep up with  our posts. Check below for recent job openings. 
              </p>
            </div>

        </div>
    </div>
  )
}
