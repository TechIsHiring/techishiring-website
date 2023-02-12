import Card from "components/atoms/card/card";
import DefaultText from "components/atoms/typography/default-text";
import HeaderText from "components/atoms/typography/heading-text";
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue
} from "@chakra-ui/react";

const AboutContent = () => {
  return (
    <>
      <Flex
        w={"full"}
        h={"80vh"}
        mb={10}
        backgroundImage={
          "url(https://res.cloudinary.com/phantom1245/image/upload/v1676232321/techishiring/Rectangle_1335_dzx45d.png)"
        }
        backgroundSize={"cover"}
        backgroundPosition={"center center"}>
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}>
          <Stack  align={"center"} spacing={6}>
            <HeaderText level={"h1"} className={"text-white"} fontWeight={"extrabold"} fontSize={"56px"}>
                Transnational <span className="text-[#7AB8F1]">Job Listing</span> Channel
            </HeaderText>
            <DefaultText className={"text-white"} w={"60%"} textAlign={"center"}>
              So many jobs available, all you have to do is keep up with  our posts. Check below for recent job openings. 
            </DefaultText>

          </Stack>
        </VStack>
      </Flex>

    </>
    // <Card section className="flex flex-col gap-8 min-h-full">
      
  // </Card>
  );
};

export default AboutContent;