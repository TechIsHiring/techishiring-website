import { ComponentStory, ComponentMeta } from "@storybook/react";
import Icon from "../../components/atoms/icon/icon";
import { AiOutlineTwitter } from "react-icons/ai";

const storyConfig = {
  title: "Design System/Atoms/Icon"
};

export default storyConfig;

const IconTemplate: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const DefaultIcon = IconTemplate.bind({});

DefaultIcon.args = {
  Icon: AiOutlineTwitter,
  iconAlt: "Twitter"
};
