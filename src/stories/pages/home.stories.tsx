import DefaultLayout from "components/organisms/layouts/default-layout";
import Home from "../../../pages";

const storyConfig = {
  title: "Home"
};

export default storyConfig;

export const HomeStory = () => <DefaultLayout>
                                <Home />
                               </DefaultLayout>;