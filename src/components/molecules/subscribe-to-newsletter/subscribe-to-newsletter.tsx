import DefaultButton from "components/atoms/button/button";
import TextInput from "components/atoms/text-input/text-input";
import DefaultText from "components/atoms/typography/default-text";
import { verifyIsEmail } from "lib/utils/verify-email";
import { useState } from "react";

const SubscribeToNewsletter = () => {
  const [ email, setEmail ] = useState("");
  const [ error, setError ] = useState(false);

  const updateEmail = (textInput: string) => {
    const isEmail = verifyIsEmail(textInput);
    setError(!isEmail);
    if(isEmail) setEmail(textInput);
  };

  const subscribe = () => {
    console.log(error);
    console.log(email);
    if(!error && email) console.log("You have subscribed!");
  };

  return (
    <>
      <DefaultText>Subscribe to our newsletter!</DefaultText>
      <TextInput
        type="email"
        placeholder="Enter your email"
        onChange={event => updateEmail(event.target.value)}
        isInvalid={error}
      />
      {error && <div className="p-3 text-red-700">This is not a valid email address!</div>}
      <DefaultButton onClick={subscribe}>Subscribe</DefaultButton>
    </>
  );
};

export default SubscribeToNewsletter;