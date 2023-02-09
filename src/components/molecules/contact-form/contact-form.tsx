import { Box, VStack } from "@chakra-ui/react";
import Label from "components/atoms/label/label";
import TextInput from "components/atoms/text-input/text-input";
import { useState } from "react";

const ContactForm = () => {

  const[email,setEmail] = useState("");
  const[name,setName] = useState("");
  const[message,setMessage] = useState("");

  return ( 
    
    <Box>
      <form action="" >
        <VStack mt={5} justifyContent={"flex-start"} alignItems={"flex-start"}>
          <Label>
            Full name
          </Label>
          <TextInput type={"text"} placeholder={"enter your full name"} value={name} onChange= {(e) => setName(e.target.value)}/>
        </VStack>
      
        <VStack mt={5} justifyContent={"flex-start"} alignItems={"flex-start"}>
          <Label>
            Email Address
          </Label>
          <TextInput type={"text"} placeholder={"enter your full name"} value={name} onChange= {(e) => setName(e.target.value)}/>
        </VStack>


        <VStack mt={5} justifyContent={"flex-start"} alignItems={"flex-start"}>
          <Label>
            Message
          </Label>
          <TextInput type={"text"} h={10} placeholder={"enter your full name"} value={name} onChange= {(e) => setName(e.target.value)}/>
        </VStack>

        <div className="mt-8">
          <button className="bg-primary w-full py-3 text-bgColor rounded-lg" >Send</button>
        </div>
      </form>

    </Box>
  );
};
 
export default ContactForm;