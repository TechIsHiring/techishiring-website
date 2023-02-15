import HeaderText from "components/atoms/typography/heading-text";
import NewsletterEntry from "components/molecules/newsletter-entry/newsletter-entry";

interface NewsLetterEntriesProps {
  issues: Issues[] | undefined;
}

const NewsLetterEntries = ({ issues }: NewsLetterEntriesProps) => {
  return (
    <article className="flex flex-col gap-5">
      <HeaderText level="h2">
        Check Out Where TechIsHiring This Week!
      </HeaderText>
      {issues && (
        <ul className="flex flex-col gap-5">
          {issues.map((issue, index) => (
            <li key={index}>
              <NewsletterEntry
                url={issue.url}
                title={new Date(issue.sent_at).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric"
                })}
              />
            </li>
          ))}
        </ul>
      )}
      {!issues && (
        <NewsletterEntry
          url="#"
          title="Something has gone wrong! Please reload the page!"
        />
      )}
    </article>
  );
};

export default NewsLetterEntries;
