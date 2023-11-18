import { Box, VStack } from "@chakra-ui/react";
import Label from "components/atoms/label/label";
import TextInput from "components/atoms/text-input/text-input";
import TextBox from "components/atoms/textbox/textbox";
import DefaultButton from "components/atoms/button/button";
import DefaultText from "components/atoms/typography/default-text";
import Spinner from "components/atoms/spinner/spinner";
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
    
    if ( noName ) {
      badInput = true;
      
      setError(prevState => {

        return {
          ...prevState,
          name: true
        };
      });
    };

    if ( wrongEmail ) {
      badInput = true;
      
      setError(prevState => { 
        
        return {
          ...prevState,
          email: true
        };
      });
    };

    if ( noMessage ) {
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

  const handleClick = async (e: Event) => {
    e.preventDefault();
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
    <div className="flex flex-col justify-center min-h-[580px]">
      {statuses.isIdle &&
        <>
          <ContactHeading />
          <form action="" >
            <div className={"flex justify-start items-start flex-col mt-2"}>
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
                className={"w-full"}
              />
              {error.name && <span className="text-rose-500">Please add a name</span>}
            </div>
          
            <div className={"flex justify-start items-start flex-col mt-2"}>
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
                className={"w-full"}
              />
              {error.email && <span className="text-rose-500">Please add a proper email address</span>}
            </div>

            <div className={"flex justify-start items-start flex-col mt-2"}>
              <Label>
                Leave us a note!
              </Label>
              <TextBox
                maxLength={400}
                placeholder={"Tell us something..."}
                value={message}
                isInvalid={error.message}
                onChange={(e) => setMessage(e.target.value)}
                className={"h-20 w-full"}
              />
              {error.message && <span className="text-rose-500">Please add a message</span>}
            </div>

            <div className="mt-8">
              <DefaultButton
                onClick={handleClick}
                className={"w-full text-white rounded-xl bg-[#3182ce] hover:bg-[#a9a9a9] active:bg-[#CBD5E0] focus-visible:shadow-[0_0_0_3px_rgb(66,153,225,0.6)]"}
              >
                Send message
              </DefaultButton>
            </div>
          </form>
        </>
      }

      {statuses.isPending && 
        <span className="flex justify-center items-center">
          <Spinner />
        </span>
      }
      
      {statuses.isSuccess && 
        <span className="flex flex-col gap-4 text-center">
          <HeaderText className="text-primary text-lg" level="h2">
            Thank you for your feedback! 
          </HeaderText>
          <DefaultText>
            We will get back to you as soon as possible!
          </DefaultText>
        </span>
      }

      {statuses.isError &&
        <span className="flex flex-col gap-4 text-center">
          <HeaderText level="h2" className="text-lg text-red">
            Sorry, we were not able to send your email! 
          </HeaderText>
          <DefaultText>
            Please try again later.
          </DefaultText>
        </span>
      }
    </div>
  );
};
 
export default ContactForm;