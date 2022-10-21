import { ComponentStory, ComponentMeta } from "@storybook/react";
import Icon from "../../components/atoms/icon/icon";
import { AiOutlineTwitter } from "react-icons/ai";

const storyConfig = {
  title: "Design System/Atoms/Icon"
};

export default storyConfig;

const IconTemplate: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const NotLink = IconTemplate.bind({});
export const Link = IconTemplate.bind({});

NotLink.args = {
  Icon: AiOutlineTwitter,
  iconAlt: "Twitter"
};

Link.args = {
  Icon: AiOutlineTwitter,
  iconAlt: "Twitter",
  url: "https://www.twitter.com"
};