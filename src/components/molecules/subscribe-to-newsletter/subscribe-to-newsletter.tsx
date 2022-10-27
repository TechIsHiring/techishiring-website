import DefaultButton from "components/atoms/button/button";
import TextInput from "components/atoms/text-input/text-input";
import HeaderText from "components/atoms/typography/heading-text";
import { addNewSubscriber } from "lib/api/external-apis/revue/subscribers-api";
import useApi from "lib/api/hooks/useApi";
import { verifyIsEmail } from "lib/utils/verify-email";
import { useState } from "react";

const SubscribeToNewsletter = () => {
  const [ email, setEmail ] = useState("");
  const [ error, setError ] = useState(false);

  const { data, apiCall: sendEmailToRevue, statuses } = useApi(addNewSubscriber);

  const updateEmail = (textInput: string) => {
    const isEmail = verifyIsEmail(textInput);
    setError(!isEmail);
    if(isEmail) setEmail(textInput);
  };

  const handleSubscribe = () => {
    console.log(error);
    console.log(email);
    if(!error && email) {
      const requestBody = {
        email: email,
        // eslint-disable-next-line
        double_opt_in: true
      };

      sendEmailToRevue(requestBody);
      console.log(data);
    }
  };

  return (
    <article className="flex flex-col gap-4">
      <HeaderText level="h2">Subscribe to our newsletter!</HeaderText>
      <div className="flex gap-2">
        <div>
          <TextInput
            type="email"
            placeholder="Enter your email"
            onChange={event => updateEmail(event.target.value)}
            isInvalid={error}
          />
          {error && <div className="p-3 text-red-700">This is not a valid email address!</div>}
        </div>
        <DefaultButton onClick={handleSubscribe}>Subscribe</DefaultButton>
      </div>
    </article>
  );
};

export default SubscribeToNewsletter;