import NewsletterEntry from "../../components/molecules/newsletter-entry/newsletter-entry";

const storyConfig = {
  title: "Design System/Molecules/Newsletter Entry"
};

const testIssues = {
  url: "https://www.google.com",
  title: "test title",
  key: 1
};

export default storyConfig;

export const NewsletterEntryStory = () => (
  <NewsletterEntry
    url={testIssues.url}
    title={testIssues.title}
    key={testIssues.key}
  />
);
