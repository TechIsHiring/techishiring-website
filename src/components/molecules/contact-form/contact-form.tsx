import { Box, VStack } from "@chakra-ui/react";
import Label from "components/atoms/label/label";
import TextInput from "components/atoms/text-input/text-input";
import TextBox from "components/atoms/textbox/textbox";
import DefaultButton from "components/atoms/button/button";
import { useState } from "react";
import React from "react";
import { sendEmail } from "lib/api/internal-apis/send-grid";
import useApi from "lib/api/hooks/useApi";

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

    const wrongEmail = email.length === 0;
    const noName = name.length === 0;
    const noMessage = message.length === 0;
    
    if(noName) {
      badInput = true;
      
      setError(prevState => {

        return {
          ...prevState,
          name: true
        };
      });
    };

    if(wrongEmail) {
      badInput = true;
      
      setError(prevState => { 
        
        return {
          ...prevState,
          email: true
        };
      });
    };

    if(noMessage) {
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
    if(badInput) return;

    try {
      await handleEmail({
        email,
        name,
        message
      });
    } catch (error) {
      console.log(error);
    }
  };

  return ( 
    <Box>
      <form action="" >
        <VStack mt={5} justifyContent={"flex-start"} alignItems={"flex-start"}>
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
      
        <VStack mt={5} justifyContent={"flex-start"} alignItems={"flex-start"}>
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

        <VStack mt={5} justifyContent={"flex-start"} alignItems={"flex-start"}>
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

    </Box>
  );
};
 
export default ContactForm;