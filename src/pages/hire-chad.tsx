import WithPageLayout from "interfaces/with-page-layouts";
import DefaultLayout from "components/templates/layouts/default-layout";
import ContactContent from "components/organisms/contact-content/contact-content";
import HeadContent from "components/particles/head/HeadContent";

interface ContactProps {

};

const Contact: WithPageLayout<ContactProps> = () => {

  return ( 
    <div>

      <HeadContent content={"hire-chad"}/>

      <ContactContent />

    </div>
  );
};
Contact.PageLayout = DefaultLayout;
export default Contact;