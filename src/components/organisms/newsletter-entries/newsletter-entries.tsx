import HeaderText from "components/atoms/typography/heading-text";
import NewsletterEntry from "components/molecules/newsletter-entry/newsletter-entry";

interface NewsLetterEntriesProps {
  issues: Issues[] | undefined;
}

const NewsLetterEntries = ({ issues }: NewsLetterEntriesProps) => {
  return (
    <article className="flex flex-col gap-5">
      <HeaderText level="h2">Check out our latest newsletters!</HeaderText>
      {issues && issues.map(( issues: any, index: number ) => <NewsletterEntry key={index} url={issues.url} title={issues.title} />)}
      {!issues && <NewsletterEntry url="#" title="Something has gone wrong! Please reload the page!"/>}
    </article>
  );
};

export default NewsLetterEntries;