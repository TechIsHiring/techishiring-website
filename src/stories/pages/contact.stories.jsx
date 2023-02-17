import ContactLayout from "components/templates/layouts/contact-layout";
import Contact from "../../pages/contact";

const storyConfig = {
  title: "Design System/Pages/Contact"
};

export default storyConfig;

export const ContactStory = () =>
  <ContactLayout>
    <Contact />
  </ContactLayout>;