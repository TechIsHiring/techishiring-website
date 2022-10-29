import Card from "components/atoms/card/card";
import Link from "components/atoms/link/link";
import HeaderText from "components/atoms/typography/heading-text";

interface NewsletterEntryProps {
  url: string;
  title: string;
}

const NewsletterEntry = ({ url, title }: NewsletterEntryProps) => {
  return (
    <Link url={url} externalLink >
      <a target="_blank" rel="noreferrer">
        <Card>
          <HeaderText level="h3" className="!text-lg">
            {title}
          </HeaderText>
        </Card>
      </a>
    </Link>
  );
};

export default NewsletterEntry;