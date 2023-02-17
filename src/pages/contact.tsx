import WithPageLayout from "interfaces/with-page-layouts";
import ContactLayout from "components/templates/layouts/contact-layout";
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
Contact.PageLayout = ContactLayout;
export default Contact;