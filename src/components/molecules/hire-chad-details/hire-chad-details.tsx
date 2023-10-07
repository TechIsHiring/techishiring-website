import { Box, VStack } from "@chakra-ui/react";
import HeaderText from "components/atoms/typography/heading-text";
import DefaultText from "components/atoms/typography/default-text";
import Link from "components/atoms/link/link";
import Icon from "components/atoms/icon/icon";
import { 
  SiTwitter,
  SiLinkedin,
  SiGithub,
  SiDevdotto
} from "react-icons/si";

const HireChadDetails = () => {
  return ( 
    <Box as={"div"} className="w-full text-center lg:text-left text-lg lg:text-xl leading-[41px]">
      <VStack className="!flex gap-8 lg:gap-2 lg:!items-start" justifyContent={"center"} alignItems={"center"}>
        <HeaderText level={"h2"} className={"text-secondary py-2"}>
          Hire Chad R. Stewart
        </HeaderText>
        <DefaultText as={"p"} className={"w-4/5 lg:w-[70%]"}>
          Chad R. Stewart is a Full Stack Software Engineer with a Front-End Engineering
          focused skill set. He has worked on several software projects and lead teams
          in the FinTech and Developer Tools space. He has also spoken on several podcasts
          and events, more recently on Open Source Friday, run by GitHub, to talk about
          TechIsHiring and hiring.
        </DefaultText>
        <Link href="https://drive.google.com/file/d/1tI3GwHaTz0GqWkx2w9pME5MLvSSqPks_/view?usp=share_link">
          <DefaultText className="hover:text-primary text-gray hover:underline">
            Check out my resume
          </DefaultText>
        </Link>
        <div className="flex w-4/5 flex-col outline-none">
          <DefaultText className={"text-black text-[23px] capitalize py-6 font-bold "}>Check out my links</DefaultText>
          <div className="flex gap-12 w-full items-center justify-center lg:justify-start">
            <Link href="https://www.twitter.com/Chad_R_Stewart">
              <Icon Icon={SiTwitter} iconAlt="Chad Stewart Twitter" />
            </Link>
            <Link href="https://www.linkedin.com/in/ChadRStewart/">
              <Icon Icon={SiLinkedin} iconAlt="Chad Stewart LinkedIn" />
            </Link>
            <Link href="https://www.github.com/ChadStewart/">
              <Icon Icon={SiGithub} iconAlt="Chad Stewart GitHub" />
            </Link>
            <Link href="https://www.dev.to/Chad_R_Stewart/">
              <Icon Icon={SiDevdotto} size={32} iconAlt="Chad Stewart Dev.to" />
            </Link>
          </div>
        </div>
      </VStack>
    </Box>
  );
};
 
export default HireChadDetails;