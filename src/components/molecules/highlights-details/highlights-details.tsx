import Spinner from "components/atoms/spinner/spinner";
import { TwitterTweetEmbed } from "react-twitter-embed";

const HighlightsDetails = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-center items-center gap-10">
      <TwitterTweetEmbed tweetId="1641471955600658432" />
      <TwitterTweetEmbed tweetId="1641471955600658432" />
      <TwitterTweetEmbed tweetId="1641471955600658432" />
    </section>
  )
};

export default HighlightsDetails;