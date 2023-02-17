import HeaderText from "components/atoms/typography/heading-text";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import Card from "components/atoms/card/card";

const TwitterFeed = () => {
  return (
    <Card section className="min-w-full md:px-[10%]">
      <>
        <header>
          <HeaderText className="pb-5 text-left" level="h2">
            Latest tweets from #TechIsHiring:
          </HeaderText>
        </header>
        <TwitterTimelineEmbed sourceType="profile" screenName="TechIsHiring" />
      </>
    </Card>
  );
};

export default TwitterFeed;
