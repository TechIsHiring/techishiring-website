import Card from "components/atoms/card/card";
import Link from "components/atoms/link/link";
import HeaderText from "components/atoms/typography/heading-text";

interface NewsLetterEntriesProps {
  issues: any;
}

const NewsLetterEntries = ({ issues }: NewsLetterEntriesProps) => {
  return (
    <article className="flex flex-col gap-5">
      <HeaderText level="h2">Check out our latest newsletters!</HeaderText>
      {issues.map(( issues: any, index: number ) => 
        <Link key={index} url={issues.url} externalLink >
          <Card>
            <HeaderText level="h3" className="!text-lg">
              {issues.title}
            </HeaderText>
          </Card>
        </Link>
      )}
    </article>
  );
};

export default NewsLetterEntries;