import DefaultButton from "components/atoms/button/button";
import TextInput from "components/atoms/text-input/text-input";
import HeaderText from "components/atoms/typography/heading-text";
import { verifyIsEmail } from "lib/utils/verify-email";
import { useState } from "react";

const SubscribeToNewsletter = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [statuses, setStatuses] = useState({
    isSuccess: false,
    isError: false,
    isIdle: true
  });

  const updateEmail = (textInput: string) => {
    const isEmail = verifyIsEmail(textInput);
    setError(!isEmail);
    if (isEmail) setEmail(textInput);
  };

  const handleSubscribe = () => {
    
  };

  return (
    <article className="flex flex-col gap-4">
      <HeaderText level="h2">Subscribe To Our Newsletter!</HeaderText>
      {!statuses.isSuccess && !statuses.isError && (
        <div className="flex flex-col gap-3">
          <label className="pl-4">Enter your email</label>
          <div className="flex w-full gap-3 lg:w-1/2">
            <TextInput
              type="email"
              placeholder="Enter your email"
              onChange={(event) => updateEmail(event.target.value)}
              isInvalid={error}
            />
            <DefaultButton
              backgroundColor={"blue.500"}
              color={"white"}
              _hover={{
                background: "darkgray"
              }}
              onClick={handleSubscribe}
            >
              Subscribe
            </DefaultButton>
            {error && (
              <div className="p-3 text-red-700">
                This is not a valid email address!
              </div>
            )}
          </div>
        </div>
      )}
      {statuses.isSuccess && (
        <div>Please check your email to confirm your subscription!</div>
      )}
      {statuses.isError && (
        <div>
          I&apos;m sorry! Something has gone wrong with signing up your email!
        </div>
      )}
    </article>
  );
};

export default SubscribeToNewsletter;
