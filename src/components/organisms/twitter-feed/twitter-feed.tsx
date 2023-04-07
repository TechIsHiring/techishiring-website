import HeaderText from "components/atoms/typography/heading-text";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import Card from "components/atoms/card/card";
import { useState } from 'react';
import Spinner from "components/atoms/spinner/spinner";

const TwitterFeed = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <Card section className="min-w-full md:px-[10%]">
      <>
        <header>
          <HeaderText className="pb-5 text-left" level="h2">
            Latest tweets from #TechIsHiring:
          </HeaderText>
        </header>
        {isLoading && 
          <div className="flex my-3 inset-0 justify-center items-center">
            <Spinner />
          </div>
        }
        <TwitterTimelineEmbed 
        sourceType="profile" 
        screenName="TechIsHiring" 
        onLoad={handleLoad}
        />
      </>
    </Card>
  );
};

export default TwitterFeed;
