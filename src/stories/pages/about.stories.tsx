import DefaultLayout from "components/templates/layouts/default-layout";
import About from "../../../pages/about";

const storyConfig = {
  title: "Design System/Pages/About"
};

export default storyConfig;

export const AboutStory = () =>
  <DefaultLayout>
    <About />
  </DefaultLayout>;