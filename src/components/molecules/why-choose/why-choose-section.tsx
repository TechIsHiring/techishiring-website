import React from "react";
import DefaultText from "components/atoms/typography/default-text";
import { SiTwitter } from "react-icons/si";
import { TbRefresh } from "react-icons/tb";
import { BsFillKeyFill } from "react-icons/bs";
import Icon from "components/atoms/icon/icon";
import HeaderText from "components/atoms/typography/heading-text";

const WhyChooseSection = () => {
  return (
    <section className="mx-auto w-full max-w-screen-2xl bg-white">
      <figure className="m-10 pb-10">
        <header className="mb-10 lg:w-[30%] ">
          <HeaderText
            level="h2"
            size="xl"
            dataTest="why-choose-techIsHiring"
            className="text-left !font-inter !font-extrabold !leading-[2.8rem]"
          >
            Why Choose TechIsHiring ?
          </HeaderText>
        </header>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
          <div className="flex flex-col space-y-3 rounded-xl border p-6">
            <div className="relative h-8 w-8 ">
              <Icon
                Icon={SiTwitter}
                size={30}
                color="#1DA1F2"
                iconAlt="Twitter for Tech Is Hiring"
              />
            </div>
            <div className="">
              <DefaultText
                dataTest="twitter"
                className="text-left font-inter text-lg font-extrabold"
              >
                Sources from Twitter
              </DefaultText>
            </div>
            <div className="">
              <DefaultText
                dataTest="twitter-content"
                className="text-left font-inter text-base font-normal"
              >
                Curates job openings and links from twitter posts.Curates job
                openings and links from twitter posts.
              </DefaultText>
            </div>
          </div>
          <figure className="flex flex-col space-y-3 rounded-xl border p-6">
            <div className="relative h-8 w-8 ">
              <Icon
                Icon={TbRefresh}
                size={30}
                color="#A38DFD"
                iconAlt="Up to date for Tech Is Hiring"
              />
            </div>
            <div className="">
              <DefaultText
                dataTest="date"
                className="text-left font-inter text-lg font-extrabold"
              >
                Up to date
              </DefaultText>
            </div>
            <div className="">
              <DefaultText
                dataTest="date-content"
                className="text-left font-inter text-base font-normal"
              >
                Shares the latest job postings and daily job vacancies.Shares
                the latest job postings and daily job vacancies.
              </DefaultText>
            </div>
          </figure>
          <figure className="flex flex-col space-y-3 rounded-xl border p-6">
            <div className="relative h-8 w-8 ">
              <Icon
                Icon={BsFillKeyFill}
                size={30}
                color="#7AB8F1"
                iconAlt="Permission for Tech Is Hiring"
              />
            </div>
            <div className="">
              <DefaultText
                dataTest="permissions"
                className="text-left font-inter text-lg font-extrabold"
              >
                Permissions
              </DefaultText>
            </div>
            <div className="">
              <DefaultText
                dataTest="permissions-content"
                className="text-left font-inter text-base font-normal"
              >
                Obtains the author&apos;s consent before retweeting and sharing
                content on TechIsHiring.
              </DefaultText>
            </div>
          </figure>
        </div>
      </figure>
    </section>
  );
};

export default WhyChooseSection;
