import Card from "components/atoms/card/card";
import DefaultText from "components/atoms/typography/default-text";
import HeaderText from "components/atoms/typography/heading-text";
import DefaultButton from "components/atoms/button/button";
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  Divider,
  Box
  
} from "@chakra-ui/react";
import Link from "components/atoms/link/link";
import Icon from "components/atoms/icon/icon";
import { 
  SiTwitter,
  SiLinkedin,
  SiFacebook
} from "react-icons/si";


const AboutContent = () => {
  return (
    <Box w={"full"}>
      <Flex
        w={"full"}
        h={{base: "100vh", md:"80vh"}}
        backgroundImage={ 
          { base: "url(https://res.cloudinary.com/phantom1245/image/upload/v1676232320/techishiring/Rectangle_1336_ncjum3.png)", md: "url(https://res.cloudinary.com/phantom1245/image/upload/v1676232321/techishiring/Rectangle_1335_dzx45d.png)" }
        }
        backgroundSize={"cover"}
        backgroundPosition={"center center"}>
        <VStack
          w={"full"}
          justify={"center"}
          px={{base:"18px", lg:0}}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}>
          <Stack  align={"center"} spacing={6}>
            <HeaderText level={"h1"} className={"text-white"} fontWeight={"extrabold"} fontSize={{base: "39px", md:"56px"}}>
                Transnational <span className="text-[#7AB8F1]">Job Listing</span> Channel
            </HeaderText>
            <DefaultText className={"text-white"} w={{base: "100%", md:"60%"}} textAlign={{base:"left", md:"center"}}>
              So many jobs available, all you have to do is keep up with  our posts. Check below for recent job openings. 
            </DefaultText>

          </Stack>
        </VStack>
      </Flex>
      <Box className={"relative bottom-32 md:bottom-14 px-10 lg:px-0 flex md:justify-center"} mx={"auto"} w={{ base:"100%", md:"100%", lg:"60%"}}>
        <Flex background={"#0B2F4F"} flex={{ base: 1, md: "auto" }} flexDirection={{base:"column",md:"row"}} w={"100%"} p={8} gap={9} borderLeftRadius={"8px"} >
          <Box>
            <HeaderText level={"h4"} color={"white"} fontSize={"20px"}>Have a question ?</HeaderText>
            <DefaultText className={"text-altWhite text-[16px]"}>If you have any questions , please contact us</DefaultText>
          </Box>
          <Box>
            <DefaultButton
              w={"100%"}
              py={3}
              color={"white"}
              borderRadius={"8px"}
              background={"transparent"}
              border={"2px"}
              borderColor={"white"}
              _hover={{
                background: "transparent"
              }}
            >
            Contact Us
            </DefaultButton>

          </Box>
        </Flex>
        <Box w={"50%"} display={{ base: "none", md: "flex" }} borderRightRadius={"8px"} className={"px-10 bg-white justify-center items-center flex-col gap-3"}>
          <DefaultText className={"text-dark text-[16px]"}>Follow us on Social Media:</DefaultText>
          <Flex className="flex gap-12 w-full items-center justify-center">      
            <Icon Icon={SiTwitter} iconAlt="Twitter for Tech Is Hiring" url="https://www.twitter.com/techishiring" className={"text-primary"}/>
            <Icon Icon={SiLinkedin} iconAlt="LinkedIn for Tech Is Hiring" url="https://www.linkedin.com/company/techishiring" className={""} />
            <Icon Icon={SiFacebook} iconAlt="LinkedIn for Tech Is Hiring" url="https://www.linkedin.com/company/techishiring" className={"text-primary"}/>
          </Flex>
        </Box>
      </Box>
      <Box className={"flex justify-center text-center md:text-left text-lg md:text-xl leading-[41px] py-20 items-center flex-col gap-8 font-700 text-altDark "}>
        <DefaultText as={"p"} w={{base:"80%", md:"70%"}}>
          <b>TechIsHiring</b> tries to assist tech professionals in finding employment 
          by encouraging meaningful interactions between people looking for employment 
          and those who can assist, rather than focusing primarily on advertising job openings.
        </DefaultText>
        <DefaultText as={"p"} w={{base:"80%", md:"70%"}}>
          During the epidemic, <b>Chad Stewart</b>, the <b>founder of TechIsHiring</b>, noticed that many 
          people were tweeting about job openings they had discovered and advertising possibilities 
          that they had come across, which is how <b>TechIsHiring</b> came to be. Since there was no one place  
          where these tweets could be collected, the hashtag <Link
            url={"https://twitter.com"}>
            <b className="text-primary font-800 cursor-pointer">
               #TechIsHiring
            </b>
          </Link> and the TechIsHiring account were created.
        </DefaultText>
        <Box display={{base: "flex", md: "none"}} w={"80%"} flexDirection={"column"}>
          <Divider orientation="horizontal" borderColor={"#838383"}/>
          <DefaultText className={"text-black text-[23px] capitalize pt-14 pb-8 font-bold "}>Follow us</DefaultText>
          <Flex className="flex gap-12 w-full items-center justify-center">      
            <Icon Icon={SiTwitter} iconAlt="Twitter for Tech Is Hiring" url="https://www.twitter.com/techishiring" className={"text-primary"}/>
            <Icon Icon={SiLinkedin} iconAlt="LinkedIn for Tech Is Hiring" url="https://www.linkedin.com/company/techishiring" className={""} />
            <Icon Icon={SiFacebook} iconAlt="LinkedIn for Tech Is Hiring" url="https://www.linkedin.com/company/techishiring" className={"text-primary"}/>
          </Flex>
        </Box>
        <article className="text-primary py-8 px-10 md:px-0">‘Where great Jobs and great Engineers come to find one another!’</article>
        
      </Box>

    </Box>
    // <Card section className="flex flex-col gap-8 min-h-full">
      
  // </Card>
  );
};

export default AboutContent;