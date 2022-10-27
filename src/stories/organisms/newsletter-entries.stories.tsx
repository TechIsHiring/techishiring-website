import NewsletterEntries from "../../components/organisms/newsletter-entries/newsletter-entries";

const storyConfig = {
  title: "Design System/Organisms/Newsletter Entries"
};

const testIssues = [
  {
    url: "https://www.google.com",
    title: "test title"
  }
];

export default storyConfig;

export const NewsletterEntriesStory = () => <NewsletterEntries issues={testIssues} />;