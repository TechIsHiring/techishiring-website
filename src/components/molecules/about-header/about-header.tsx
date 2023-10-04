import React from 'react'
import HeaderText from "components/atoms/typography/heading-text";
import { aboutImage } from "images/Index";

export default function AboutHeader() {

  return (
    <div
        className="flex w-full bg-center h-screen lg:h-[80vh] bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${aboutImage.src})` }}
    >
        <div className="w-full flex flex-col items-center justify-center px-[18px] lg:px-0 bg-gradient-to-r from-black/60  to-transparent gap-4">
            
            <HeaderText data-cy={"about-header-header"} level={"h1"} className={"text-white"} fontWeight={"extrabold"} fontSize={{base: "39px", md:"56px"}}>
                Transnational <span className="text-[#7AB8F1]">Job Listing</span> Channel
            </HeaderText>

            <div className="text-white flex justify-start items-start lg:px-5 w-full lg:w-[40%] text-left lg:text-center">
              <p className="">
                So many jobs available, all you have to do is keep up with our posts. Check below for recent job openings. 
              </p>
            </div>

        </div>
    </div>
  )
}
