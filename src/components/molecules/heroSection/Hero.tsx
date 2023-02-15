import Image from "next/image";
import React from "react";
import HeroImage from "../../../../public/assets/images/heroImage.svg";

import Icon from "components/atoms/icon/icon";
import {AiOutlineSearch} from "react-icons/ai";


const Hero = () => {
  return (
    <div className=" w-full h-full bg-[#eaeaea] ">
      <div className="w-full h-screen bg-[url('w-full h-screen bg-[url('https://s3-alpha-sig.figma.com/img/be3d/4572/95d73f726199a6e31e24f7b63daa1a82?Expires=1676851200&Signature=pjRJnadNsA7JGPWF0d8EnX68CS5-ESV9OAd0EdcL1~htONJGvZ1nBHWGrlRbNAQ80z9gC08jPTGbyEMKXrigcAt~znkhh0m~vt~1cZ5mQVT97oSdzcqMtXaKT2uozddzXXRc2nW-X~viy5VSWcJmulFrEGN69RIufX0dcCxJAKr7tZjxFM7OMWeHXDTmNeu~Rys8B5Fr3nAoc8AobfMneyMgAA22mNTkU6AHTDFIWl0TAD7f494RUeFaX3meJ8AQcPx6yZkKn-y3V40C9lxryK18knov8ATO30rRjBk3ya8xmOjbZSBGBfY36Rb346HADSh2cM7uuDxvqF504Bvndw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')] bg-cover bg-center')] bg-cover bg-center">
        <div className="max-w-[1210px] mx-auto p-10 flex flex-col lg:flex-row justify-between items-center">
          <div className="w-full max-w-[650px]">
            <p className=" text-4xl md:text-6xl font-[750] md:leading-[70px]">
              Where great <span className="text-[#7AB8F1]">Jobs</span> and great{" "}
              <span className="text-[#A38DFD]">Engineers</span> come to find one
              another !
            </p>
            <p className="py-6 text-base">
              So many jobs available, all you have to do is keep up with our
              posts. Check below for recent job openings.
            </p>
            <div className="bg-white p-2  flex justify-between items-center rounded-lg">
              <div className="flex items-center text-[#2188E7]">

                <Icon Icon={AiOutlineSearch} iconAlt="Search Icon" />
                
                <input
                  type="search"
                  placeholder="Search job title"
                  className="focus:outline-none px-2"
                />
              </div>
              <div>
                <button className="bg-[#165C9C] text-white font-bold p-3 rounded-xl">
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="max-h-[529px] max-w-[481px] pt-5 lg:pt-0">
            <Image src={HeroImage} alt="Hero Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
