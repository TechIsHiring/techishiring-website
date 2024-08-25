import Image from "next/image";
import React from "react";
import { HeroImage } from "../../../images/Index";

import Icon from "components/atoms/icon/icon";
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="h-full w-full bg-[#eaeaea] ">
      <div
        className={`min-h-[650px] bg-[url('/assets/images/hero-bg-image.jpg')]`}
      >
        <div className="mx-auto flex h-full max-w-[1210px] flex-col items-center justify-between px-10 py-8 lg:flex-row">
          <div className="w-full max-w-[650px]">
            <p
              data-test="hero-title"
              className="text-4xl font-[750] md:text-6xl md:leading-[70px]"
            >
              Where great <span className="text-[#2188e7]">Jobs</span> and great{" "}
              <span className="text-[#A38DFD]">Engineers</span> come to find one
              another!
            </p>
            <p data-test="hero-flavored-text" className="py-6 text-base">So many jobs available, all you have to do is keep up with our posts. Check below for recent job openings.</p>
          </div>
          <div className="relative mt-6 min-h-[20rem] w-full md:h-[30rem] lg:mt-0 lg:h-[35rem] ">
            <Image data-test="hero-image" src={HeroImage} alt="Hero Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
