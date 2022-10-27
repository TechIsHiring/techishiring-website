import SubscribeToNewsletter from "components/molecules/subscribe-to-newsletter/subscribe-to-newsletter";
import NewsLetterEntries from "../newsletter-entries/newsletter-entries";

interface NewsletterContentProps {
  lastTenIssues: any;
}

const NewsletterContent = ({ lastTenIssues }: NewsletterContentProps) => {

  return (
    <>
      <SubscribeToNewsletter />
      <NewsLetterEntries issues={lastTenIssues} />
    </>
  );
};

export default NewsletterContent;