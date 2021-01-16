// Button.stories.js

import { Button } from "./Button";

const buttonStories = {
  title: "Components/Common/Button",
  component: Button,
};

// We create a “template” of how args map to rendering
const Template = (args) => <Button {...args} />;

// Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = { background: "teal", label: "Button" };

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, background: "blue", label: "😄👍😍💯" };

export const Tertiary = Template.bind({});
Tertiary.args = { ...Primary.args, label: "📚📕📈🤓" };

export default buttonStories;
