import DefaultLayout from "components/templates/layouts/default-layout";
import Home from "../../../pages";

const storyConfig = {
  title: "Design System/Pages/Home"
};

export default storyConfig;

export const HomeStory = () =>
  <DefaultLayout>
    <Home />
  </DefaultLayout>;