import React from 'react';
import HomeLogo from "../components/HomeLogo/HomeLogo";

export default {
    title: 'layout/mainLogo',
    component: HomeLogo,
    decorators: [
        (Story) => (
            <div style={{ padding: '1em', background: '#1A032A' }}>
                <Story />
            </div>
        ),
    ],
};

const Template = (args) => <HomeLogo {...args} />;

export const defaultUsage = Template.bind({});
defaultUsage.args = {};
