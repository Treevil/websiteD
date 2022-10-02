import React from 'react';
import HomeMain from "../components/HomeMain/HomeMain";


export default {
    title: 'page/main',
    component: HomeMain,
};

const Template = (args) => <HomeMain {...args} />;

export const defaultUsage = Template.bind({});
defaultUsage.args = {};
