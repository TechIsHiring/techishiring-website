import React from 'react'
import HeaderText from "components/atoms/typography/heading-text";
import { aboutImage } from "images/Index";

export default function AboutHeader() {

  return (
    <div
      className="flex h-screen w-full bg-cover bg-center bg-no-repeat lg:h-[80vh]"
      style={{ backgroundImage: `url(${aboutImage.src})` }}
      data-test="about-hero-image"
    >
      <div className="flex w-full flex-col items-center justify-center gap-4 bg-gradient-to-r from-black/60 to-transparent  px-[18px] lg:px-0">
        <HeaderText
          data-test="about-header"
          level={"h1"}
          className={"text-white"}
          fontWeight={"extrabold"}
          fontSize={{ base: "39px", md: "56px" }}
        >
          Transnational <span className="text-[#7AB8F1]">Job Listing</span>{" "}
          Channel
        </HeaderText>

        <div className="flex w-full items-start justify-start text-left text-white lg:w-[40%] lg:px-5 lg:text-center">
          <p data-test="about-hero-text" className="">
            So many jobs available, all you have to do is keep up with our
            posts. Check below for recent job openings.
          </p>
        </div>
      </div>
    </div>
  );
}
