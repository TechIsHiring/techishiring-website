import AltLayout from "components/templates/layouts/alt-layout";
import Contact from "../../pages/contact";

const storyConfig = {
  title: "Design System/Pages/Contact"
};

export default storyConfig;

export const ContactStory = () =>
  <AltLayout>
    <Contact />
  </AltLayout>;