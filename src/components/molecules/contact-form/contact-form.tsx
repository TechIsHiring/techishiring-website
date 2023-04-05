import { Box, VStack } from "@chakra-ui/react";
import Label from "components/atoms/label/label";
import TextInput from "components/atoms/text-input/text-input";
import TextBox from "components/atoms/textbox/textbox";
import DefaultButton from "components/atoms/button/button";
import DefaultText from "components/atoms/typography/default-text";
import ContactHeading from "components/molecules/contact-heading/contact-heading";
import { useState } from "react";
import React from "react";
import { sendEmail } from "lib/api/internal-apis/send-grid";
import useApi from "lib/api/hooks/useApi";
import { ZodString, string as zodStringCheck } from "zod";
import HeaderText from "components/atoms/typography/heading-text";

const ContactForm = () => {
  const[ email, setEmail ] = useState("");
  const[ name, setName ] = useState("");
  const[ message, setMessage ] = useState("");

  const [ error, setError ] = useState({
    email: false,
    name: false,
    message: false
  });

  const { executeApiCall: handleEmail , statuses } = useApi(sendEmail);

  const verifyInput = () => {
    let badInput = false;

    setError(prevState => {
      return {
        ...prevState,
        email: false,
        name: false,
        message: false
      }
    });

    const zodCheck = (zodVariable: ZodString, stringToTest: string) => {
      try {
        return zodVariable.parse(stringToTest);
      } catch {
        return false;
      }
    };

    const wrongEmail = !zodCheck(zodStringCheck().nonempty().email(), email);
    const noName = !zodCheck(zodStringCheck().nonempty(), name);
    const noMessage = !zodCheck(zodStringCheck().nonempty(), message);
    
    if( noName ) {
      badInput = true;
      
      setError(prevState => {

        return {
          ...prevState,
          name: true
        };
      });
    };

    if( wrongEmail ) {
      badInput = true;
      
      setError(prevState => { 
        
        return {
          ...prevState,
          email: true
        };
      });
    };

    if( noMessage ) {
      badInput = true;
      
      setError(prevState => {
      
        return {
          ...prevState,
          message: true
        };
      })
    };

    return badInput;
  };

  const handleClick = async () => {
    const badInput = verifyInput();
    if( badInput ) return;

    try {
      await handleEmail({
        email,
        name,
        message
      });
    } catch ( error ) {
      //console.log(error);
    }
  };

  return ( 
    <Box className="flex items-center justify-center min-h-[580px]">
      {statuses.isIdle &&
        <>
          <ContactHeading />
          <form action="" >
            <VStack mt={2} justifyContent={"flex-start"} alignItems={"flex-start"}>
              <Label>
                Name
              </Label>
              <TextInput
                maxLength={50}
                type={"text"}
                placeholder={"Your name"}
                value={name}
                isInvalid={error.name}
                onChange={(e) => setName(e.target.value)}
              />
              {error.name && <span className="text-rose-500">Please add a name</span>}
            </VStack>
          
            <VStack mt={2} justifyContent={"flex-start"} alignItems={"flex-start"}>
              <Label>
                Email
              </Label>
              <TextInput
                maxLength={60}
                type={"email"}
                placeholder={"you@company.com"}
                value={email}
                isInvalid={error.email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {error.email && <span className="text-rose-500">Please add a proper email address</span>}
            </VStack>

            <VStack mt={2} justifyContent={"flex-start"} alignItems={"flex-start"}>
              <Label>
                Leave us a note!
              </Label>
              <TextBox
                maxLength={400}
                h={20}
                placeholder={"Tell us something..."}
                value={message}
                isInvalid={error.message}
                onChange={(e) => setMessage(e.target.value)}
              />
              {error.message && <span className="text-rose-500">Please add a message</span>}
            </VStack>

            <div className="mt-8">
              <DefaultButton
                w={"100%"}
                py={3}
                color={"white"}
                borderRadius={"12px"}
                backgroundColor={"blue.500"}
                _hover={{
                  background: "darkgray"
                }}
                onClick={handleClick}
              >
                Send message
              </DefaultButton>
            </div>
          </form>
        </>
      }
      
      {statuses.isSuccess && 
        <span className="flex flex-col gap-4 text-center">
          <HeaderText className="text-primary !text-lg" level="h2">
            Thank you for your feedback! 
          </HeaderText>
          <DefaultText>
            We will get back to you as soon as possible!
          </DefaultText>
        </span>
      }

      {statuses.isError &&
        <span className="flex flex-col gap-4 text-center">
          <HeaderText color="red" level="h2" className="!text-lg">
            Sorry, we were not able to send your email! 
          </HeaderText>
          <DefaultText>
            Please try again later.
          </DefaultText>
        </span>
      }
    </Box>
  );
};
 
export default ContactForm;