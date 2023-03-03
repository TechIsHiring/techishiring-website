import React from "react";
import DefaultText from "components/atoms/typography/default-text";
import Image from "next/image";
import Twitter from "../../../../../public/assets/images/twitter.svg";
import Circular from "../../../../../public/assets/images/circulate.svg";
import Permission from "../../../../../public/assets/images/permission.svg";

const WhyChooseSection = () => {
  return (
    <div className="mx-auto w-full max-w-screen-2xl bg-white">
      <div className="m-10 pb-10">
        <div className="mb-10 lg:w-[30%] ">
          <DefaultText className="text-left font-inter text-4xl font-extrabold leading-[2.8rem]">
            Why Choose TechIsHiring ?
          </DefaultText>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
          <div className="flex flex-col space-y-3 rounded-xl border p-6">
            <div className="relative h-8 w-8 ">
              <Image src={Twitter} alt="Twitter Icon" />
            </div>
            <div className="">
              <DefaultText className="text-left font-inter text-lg font-extrabold">
                Sources from Twitter
              </DefaultText>
            </div>
            <div className="">
              <DefaultText className="text-left font-inter text-base font-normal">
                Curates job openings and links from twitter posts.Curates job
                openings and links from twitter posts.
              </DefaultText>
            </div>
          </div>
          <div className="flex flex-col space-y-3 rounded-xl border p-6">
            <div className="relative h-8 w-8 ">
              <Image src={Circular} alt="Circular Icon" />
            </div>
            <div className="">
              <DefaultText className="text-left font-inter text-lg font-extrabold">
                Up to date
              </DefaultText>
            </div>
            <div className="">
              <DefaultText className="text-left font-inter text-base font-normal">
                Shares the latest job postings and daily job vacancies.Shares
                the latest job postings and daily job vacancies.
              </DefaultText>
            </div>
          </div>
          <div className="flex flex-col space-y-3 rounded-xl border p-6">
            <div className="relative h-8 w-8 ">
              <Image src={Permission} alt="Permission Icon" />
            </div>
            <div className="">
              <DefaultText className="text-left font-inter text-lg font-extrabold">
                Permissions
              </DefaultText>
            </div>
            <div className="">
              <DefaultText className="text-left font-inter text-base font-normal">
                Obtains the author&apos;s consent before retweeting and sharing
                content on TechIsHiring.
              </DefaultText>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSection;
