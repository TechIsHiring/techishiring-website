import DefaultButton from "components/atoms/button/button";
import TextInput from "components/atoms/text-input/text-input";
import DefaultText from "components/atoms/typography/default-text";
import { useState } from "react";

const NewsletterContent = () => {
  const [ email, setEmail ] = useState("");
  const [ error, setError ] = useState(false);

  console.log(email);

  return (
    <>
      <DefaultText>Subscribe to our newsletter!</DefaultText>
      <TextInput type="email" placeholder="Enter your email" onChange={event => setEmail(event.target.value)}/>
      <DefaultButton>Subscribe</DefaultButton>
    </>
  );
};

export default NewsletterContent;