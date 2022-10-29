import DefaultButton from "components/atoms/button/button";
import TextInput from "components/atoms/text-input/text-input";
import HeaderText from "components/atoms/typography/heading-text";
import useApi from "lib/api/hooks/useApi";
import { RouteToInternalRevueApi } from "lib/api/internal-apis/revue-subscriber/revue-subscriber-api";
import { verifyIsEmail } from "lib/utils/verify-email";
import { useState } from "react";

const SubscribeToNewsletter = () => {
  const [ email, setEmail ] = useState("");
  const [ error, setError ] = useState(false);

  const { executeApiCall: sendEmailToRevue, statuses } = useApi(RouteToInternalRevueApi);

  const updateEmail = (textInput: string) => {
    const isEmail = verifyIsEmail(textInput);
    setError(!isEmail);
    if(isEmail) setEmail(textInput);
  };

  const handleSubscribe = () => {
    if(!error && email) {
      const requestBody = {
        email: email
      };

      try {
        sendEmailToRevue(requestBody);
      } catch (error: any) {
        console.log("Something went wrong!");
      }
    }
    if(!email) setError(true);
  };

  return (
    <article className="flex flex-col gap-4">
      <HeaderText level="h2">Subscribe to our newsletter!</HeaderText>
      { !statuses.isSuccess && !statuses.isError &&
        <div className="flex gap-3">
          <div className="w-full lg:w-1/2">
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
      }
      { statuses.isSuccess &&
        <div>
          Please check your email to confirm your subscription!
        </div>
      }
      { statuses.isError &&
        <div>
          I&apos;m sorry! Something has gone wrong with signing up your email!
        </div>
      }
    </article>
  );
};

export default SubscribeToNewsletter;