import React from 'react';
import Navbar from "../components/Navbar/Navbar";

export default {
    title: 'layout/navbar',
    component: Navbar,
    decorators: [
        (Story) => (
            <div style={{ padding: '1em', background: '#1A032A' }}>
                <Story />
            </div>
        ),
    ],
};

const Template = (args) => <Navbar {...args} />;

export const defaultUsage = Template.bind({});
defaultUsage.args = {};
