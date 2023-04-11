import HeaderText from "components/atoms/typography/heading-text";
import HighlightsDetails from "components/molecules/highlights-details/highlights-details";

const HighlightsContent = () => {
  return (
    <article className="flex flex-col items-center bg-[#D6E9FB] px-4 py-8">
      <HeaderText level="h2" className="py-12">
        TechIsHiring Highlights
      </HeaderText>
      <HighlightsDetails />
    </article>
  );
};

export default HighlightsContent;