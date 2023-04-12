import AboutHeader from "components/molecules/about-header/about-header"
import AboutBanner from "components/molecules/about-banner/about-banner"
import AboutDetails from "components/molecules/about-details/about-details"

const AboutContent = () => {

  return (
    <div className="w-full">

      <section>
        <AboutHeader />
      </section>
      
      <section>
        <AboutBanner />
      </section>

      <section>
        <AboutDetails />
      </section>

    </div>

  );
};

export default AboutContent;
