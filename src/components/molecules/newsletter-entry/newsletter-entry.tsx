import Card from "components/atoms/card/card";
import Link from "components/atoms/link/link";
import HeaderText from "components/atoms/typography/heading-text";

interface NewsletterEntryProps {
  key: number;
  url: string;
  title: string;
}

const NewsletterEntry = ({ key, url, title }: NewsletterEntryProps) => {
  return (
    <Link key={key} url={url} externalLink >
      <Card>
        <HeaderText level="h3" className="!text-lg">
          {title}
        </HeaderText>
      </Card>
    </Link>
  );
};

export default NewsletterEntry;