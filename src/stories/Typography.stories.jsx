import React from 'react';
import Typography from "../components/Typography/Typography";


export default {
    title: 'text/typography',
    component: Typography,
};

const Template = (args) => <Typography {...args} />;

export const defaultUsage = Template.bind({});
defaultUsage.args = {};
