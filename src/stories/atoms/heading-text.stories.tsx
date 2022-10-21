import HeadingText from "../../components/atoms/typography/heading-text";

const storyConfig = {
  title: "Design System/Atoms/Heading Text"
};

export default storyConfig;

export const HeadingTextStory = () => <HeadingText headingLevel="h1">
                                        Hello
                                      </HeadingText>;