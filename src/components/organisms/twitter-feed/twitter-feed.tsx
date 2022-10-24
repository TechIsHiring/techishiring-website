import HeaderText from "components/atoms/typography/heading-text";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const TwitterFeed = () => {
  return (
    <div className="min-w-full md:px-[10%]">
      <header>
        <HeaderText className="text-left pb-5" level="h2">
          Latest tweets from #TechIsHiring:
        </HeaderText>
      </header>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="TechIsHiring"
      />
    </div>
  );
};

export default TwitterFeed;