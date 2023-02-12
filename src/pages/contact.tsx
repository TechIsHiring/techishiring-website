import WithPageLayout from "interfaces/with-page-layouts";
import AltLayout from "components/templates/layouts/alt-layout";
import ContactContent from "components/organisms/contact-content/contact-content";
import HeadContent from "components/particles/head/HeadContent";

interface ContactProps {

};

const Contact: WithPageLayout<ContactProps> = () => {

  return ( 
    <div>

      <HeadContent content={"contact"}/>

      <ContactContent />

    </div>
  );
};
Contact.PageLayout = AltLayout;
export default Contact;