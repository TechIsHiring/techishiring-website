import Image from "next/image";
import React from "react";
import HeroImage from "../../../../public/assets/images/heroImages.svg";

import Icon from "components/atoms/icon/icon";
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  return (
    <div className=" h-full w-full bg-[#eaeaea] ">
      <div className=" min-h-[700px] md:min-h-[806px]">
        <div className="mx-auto flex h-full max-w-[1210px] flex-col items-center justify-between px-10 py-8 lg:flex-row">
          <div className="w-full max-w-[650px]">
            <p className=" text-4xl font-[750] md:text-6xl md:leading-[70px]">
              Where great <span className="text-[#7AB8F1]">Jobs</span> and great{" "}
              <span className="text-[#A38DFD]">Engineers</span> come to find one
              another !
            </p>
            <p className="py-6 text-base">
              So many jobs available, all you have to do is keep up with our
              posts. Check below for recent job openings.
            </p>
            <div className="flex items-center  justify-between rounded-lg bg-white p-2">
              <div className="flex items-center text-[#2188E7]">
                <Icon Icon={AiOutlineSearch} iconAlt="Search Icon" />

                <input
                  type="search"
                  placeholder="Search job title"
                  className="px-2 focus:outline-none"
                />
              </div>
              <div>
                <button className="rounded-xl bg-[#165C9C] p-3 font-bold text-white">
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className=" relative mt-6 h-[20rem] w-full md:h-[30rem] lg:mt-0 lg:h-[35rem] ">
            <Image src={HeroImage} alt="Hero Image" layout="fill" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
