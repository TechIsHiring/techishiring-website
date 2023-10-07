import HeaderText from "components/atoms/typography/heading-text";
import HighlightsDetails from "components/molecules/highlights-details/highlights-details";

const HighlightsContent = () => {
  return (
    <section className="flex flex-col items-center bg-[#D6E9FB] px-4 py-8">
      <header>
          <HeaderText level="h2" className="text-left font-inter font-extrabold py-8 text-3xl md:text-4xl !leading-[2.8rem]">
          TechIsHiring Highlights
        </HeaderText>
      </header>
      <HighlightsDetails />
    </section>
  );
};

export default HighlightsContent;