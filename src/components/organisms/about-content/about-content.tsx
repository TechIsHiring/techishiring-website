import Card from "components/atoms/card/card";
import DefaultText from "components/atoms/typography/default-text";
import HeaderText from "components/atoms/typography/heading-text";

const AboutContent = () => {
  return (
    <Card section className="flex flex-col gap-8 min-h-full">
      <>
        <article className="flex flex-col gap-2">
          <HeaderText level="h2">What is TechIsHiring?</HeaderText>
          <DefaultText as="p">
            TechIsHiring is an organization who&apos;s mission is to help great Engineers and great jobs find each other. We try to accomplish this by focusing less on advertising job opportunities but by encouraging meaningful interactions between someone searching for job opportunities and those who can help.
          </DefaultText>
        </article>
        <article className="flex flex-col gap-2">
          <HeaderText level="h2">TechIsHiring&apos;s Story</HeaderText>
          <DefaultText as="p">
            TechIsHiring was born on Twitter when <a href="www.twitter.com/Chad_R_Stewart" target="_blank">Chad Stewart</a>, the Founder of TechIsHiring noticed during the pandemic that a lot of people were tweeting searching for job opportunities and posting opportunities that they had came across. There was no centralized place for these tweets and so &apos;#TechIsHiring&apos; and the <a href="www.twitter.com/TechIsHiring">TechIsHiring account</a> was born.
          </DefaultText>
        </article>
      </>
    </Card>
  );
};

export default AboutContent;