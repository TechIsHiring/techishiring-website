import { Box, VStack } from "@chakra-ui/react";
import HeaderText from "components/atoms/typography/heading-text";
import DefaultText from "components/atoms/typography/default-text";
import Link from "components/atoms/link/link";
import Icon from "components/atoms/icon/icon";
import { 
  SiTwitter,
  SiLinkedin
} from "react-icons/si";

const HireChadDetails = () => {
  return ( 
    <Box as={"div"} className="w-full">
      <VStack justifyContent={"flex-start"} alignItems={"flex-start"}>
        <HeaderText level={"h2"} className={"text-secondary py-2"}>
          Hire Chad Stewart
        </HeaderText>
        <DefaultText>
          Chad Stewart is a really cool guy.
        </DefaultText>
        <Link url="https://drive.google.com/file/d/1tI3GwHaTz0GqWkx2w9pME5MLvSSqPks_/view?usp=share_link">
          <a href="https://drive.google.com/file/d/1tI3GwHaTz0GqWkx2w9pME5MLvSSqPks_/view?usp=share_link">
            <DefaultText className="hover:text-primary text-gray hover:underline">
              Check out my resume
            </DefaultText>
          </a>
        </Link>
        <div className="flex w-4/5 flex-col outline-none">
          <DefaultText className={"text-black text-[23px] capitalize py-8 font-bold "}>Check out my Social Media</DefaultText>
          <div className="flex gap-12 w-full items-center">
            <Link url="https://www.twitter.com/Chad_R_Stewart">
              <a href="https://www.twitter.com/Chad_R_Stewart">
                <Icon Icon={SiTwitter} iconAlt="Chad Stewart Twitter" />
              </a>
            </Link>
            <Link url="https://www.linkedin.com/in/ChadRStewart/">
              <a href="https://www.linkedin.com/in/ChadRStewart/">
                <Icon Icon={SiLinkedin} iconAlt="Chad Stewart LinkedIn" />
              </a>
            </Link>
          </div>
        </div>
      </VStack>
    </Box>
  );
};
 
export default HireChadDetails;