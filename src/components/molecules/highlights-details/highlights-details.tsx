import Spinner from "components/atoms/spinner/spinner";
import { TwitterTweetEmbed } from "react-twitter-embed";

const HighlightsDetails = () => {
  return (
    <section className="flex flex-col xl:flex-row justify-center gap-10">
      <TwitterTweetEmbed
        tweetId="1588617719016198144"
        placeholder={<Spinner />}
      />
      <TwitterTweetEmbed
        tweetId="1641471955600658432"
        placeholder={<Spinner />}
      />
      <TwitterTweetEmbed
        tweetId="1490321460098969601"
        placeholder={<Spinner />}
      />
    </section>
  )
};

export default HighlightsDetails;