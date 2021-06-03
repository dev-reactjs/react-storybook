import React from "react";
import Image from "./Image";

export default {
  title: 'Example/Image',
  component: Image,
};

const Template = (args) => <Image {...args} />;

export const Image_url = Template.bind({});
Image_url.args = {
  className: "Image",
};