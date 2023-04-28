interface CardCommonProps {
  children: JSX.Element;
  className?: string;
}

interface IsSection extends CardCommonProps {
  section: boolean;
  article?: never;
}

interface IsArticle extends CardCommonProps {
  article: boolean;
  section?: never;
}

interface NeitherArticleOrSection extends CardCommonProps {
  article?: never;
  section?: never;
}

type CardProps = IsArticle | IsSection | NeitherArticleOrSection;

const Card = ({ children, className, section, article }: CardProps) => {
  const cardClassDefinition = `${
    className ? className : ""
  } w-full p-8 shadow-md rounded-lg border-grey`;

  return (
    <>
      {section && <section className={cardClassDefinition}>{children}</section>}
      {article && <article className={cardClassDefinition}>{children}</article>}
      {!article && !section && (
        <div className={cardClassDefinition}>{children}</div>
      )}
    </>
  );
};

export default Card;
