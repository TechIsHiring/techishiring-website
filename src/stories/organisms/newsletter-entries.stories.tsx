import NewsletterEntries from "../../components/organisms/newsletter-entries/newsletter-entries";

const storyConfig = {
  title: "Design System/Organisms/Newsletter Entries"
};

const testIssues: Issues[] = [
  {
    id: 1,
    url: "https://www.google.com",
    title: "test title",
    description: "",
    // eslint-disable-next-line
    sent_at: ""
  }
];

export default storyConfig;

export const NewsletterEntriesStory = () => (
  <NewsletterEntries issues={testIssues} />
);
