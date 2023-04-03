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
    <article className={"flex justify-center text-center lg:text-left text-lg lg:text-xl leading-[41px] py-0 lg:py-20 items-center flex-col gap-8 font-700 text-altDark "}>
        <DefaultText as={"p"} w={{base:"80%", lg:"70%"}}>
          <b>TechIsHiring</b> tries to assist tech professionals in finding employment 
          by encouraging meaningful interactions between people looking for employment 
          and those who can assist, rather than focusing primarily on advertising job openings.
        </DefaultText>
        <DefaultText as={"p"} w={{base:"80%", lg:"70%"}}>
          During the pandemic,
          <Link href="https://www.linkedin.com/in/ChadRStewart/" className="text-primary">
            <b> Chad R. Stewart</b>
          </Link>
          , the <b>Founder of TechIsHiring</b>, noticed that many 
          people were tweeting about job openings they had discovered and advertising possibilities 
          that they had come across, which is how <b>TechIsHiring</b> came to be. Since there was no one place  
          where these tweets could be collected, the hashtag 
          <Link
            href={"https://twitter.com/TechIsHiring/"}>
            <b className="text-primary font-800 cursor-pointer"> #TechIsHiring</b>
          </Link> and the TechIsHiring account were created.
        </DefaultText>
        <DefaultText as={"p"} w={{base:"80%", lg:"70%"}}>
          Looking to work with the Founder directly?
          <Link href="/hire-chad">
            <b className="text-primary cursor-pointer"> Hire Chad R. Stewart</b>
          </Link>
          .
        </DefaultText>
        <div className="flex lg:hidden w-4/5 flex-col border-t-2 border-t-[#838383] outline-none">
          <DefaultText className={"text-black text-[23px] capitalize pt-14 pb-8 font-bold "}>Follow us</DefaultText>
          <div className="flex gap-12 w-full items-center justify-center">
            <Link href="https://www.twitter.com/TechIsHiring/">
              <Icon Icon={SiTwitter} iconAlt="Twitter for Tech Is Hiring" />
            </Link>
            <Link href="https://www.linkedin.com/company/TechIsHiring/">
              <Icon Icon={SiLinkedin} iconAlt="LinkedIn for Tech Is Hiring" />
            </Link>
            <Link href="https://www.youtube.com/@TechIsHiring">
              <Icon Icon={SiYoutube} iconAlt="YouTube for Tech Is Hiring"/> 
            </Link>
          </div>
        </div>
        
        <aside className="text-primary py-8 px-10 lg:px-0">‘Where great Jobs and great Engineers come to find one another!’</aside>
        
      </article>
  )
}
