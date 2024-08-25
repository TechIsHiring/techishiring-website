import React from 'react';
import DefaultText from "components/atoms/typography/default-text";
import Link from "components/atoms/link/link";
import Icon from "components/atoms/icon/icon";
import { 
  SiTwitter,
  SiLinkedin,
  SiYoutube
} from "react-icons/si";

export default function AboutDetails() {
  return (
    <article
      className={
        "font-700 flex flex-col items-center justify-center gap-8 py-0 text-center text-lg leading-[41px] text-altDark lg:py-20 lg:text-left lg:text-xl "
      }
    >
      <DefaultText
        data-test="about-details-one"
        as={"p"}
        w={{ base: "80%", lg: "70%" }}
      >
        <b>TechIsHiring</b> tries to assist tech professionals in finding
        employment by encouraging meaningful interactions between people looking
        for employment and those who can assist, rather than focusing primarily
        on advertising job openings.
      </DefaultText>
      <DefaultText
        data-test="about-details-two"
        as={"p"}
        w={{ base: "80%", lg: "70%" }}
      >
        During the pandemic,
        <Link
          href="https://www.linkedin.com/in/ChadRStewart/"
          className="text-primary"
        >
          <b> Chad R. Stewart</b>
        </Link>
        , the <b>Founder of TechIsHiring</b>, noticed that many people were
        tweeting about job openings they had discovered and advertising
        possibilities that they had come across, which is how{" "}
        <b>TechIsHiring</b> came to be. Since there was no one place where these
        tweets could be collected, the hashtag
        <Link href={"https://twitter.com/TechIsHiring/"}>
          <b className="font-800 cursor-pointer text-primary"> #TechIsHiring</b>
        </Link>{" "}
        and the TechIsHiring account were created.
      </DefaultText>
      <DefaultText
        data-test="about-details-three"
        as={"p"}
        w={{ base: "80%", lg: "70%" }}
      >
        Looking to work with the Founder directly?
        <Link href="/hire-chad">
          <b className="cursor-pointer text-primary"> Hire Chad R. Stewart</b>
        </Link>
        .
      </DefaultText>
      <div className="flex w-4/5 flex-col border-t-2 border-t-[#838383] outline-none lg:hidden">
        <DefaultText
          className={"pt-14 pb-8 text-[23px] font-bold capitalize text-black "}
        >
          Follow us
        </DefaultText>
        <div className="flex w-full items-center justify-center gap-12">
          <Link href="https://www.twitter.com/TechIsHiring">
            <Icon
              Icon={SiTwitter}
              iconAlt="Twitter for Tech Is Hiring"
            />
          </Link>
          <Link href="https://www.linkedin.com/company/TechIsHiring">
            <Icon Icon={SiLinkedin} iconAlt="LinkedIn for Tech Is Hiring" />
          </Link>
          <Link href="https://www.youtube.com/@TechIsHiring">
            <Icon Icon={SiYoutube} iconAlt="YouTube for Tech Is Hiring" />
          </Link>
        </div>
      </div>

      <aside
        data-test="about-details-four"
        className="py-8 px-10 text-primary lg:px-0"
      >
        ‘Where great Jobs and great Engineers come to find one another!’
      </aside>
    </article>
  );
}
