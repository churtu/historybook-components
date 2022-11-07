import { MyLabel } from "../../components/MyLabel";
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
        size: {
            control: 'select'
        },
        color: {
            control: 'select'
        },
        fontColor: {
            control: 'color'
        }
    }
} as ComponentMeta<typeof MyLabel>

const Template: ComponentStory<typeof MyLabel> = ( args ) => <MyLabel { ...args }/>  

export const Basic = Template.bind({});
Basic.args = {
    size:'normal',
    color: 'primary',
    allCaps: false
}

export const AllCaps = Template.bind({});
AllCaps.args = {
    color: 'primary',
    size: 'normal',
    allCaps: true
}

export const Secondary = Template.bind({});
Secondary.args = {
    color: 'secondary',
    size: 'normal',
    allCaps: false
}

export const Tertiary = Template.bind({});
Tertiary.args = {
    color: 'tertiary',
    size: 'normal',
    allCaps: false
}

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
    fontColor: '#5517ac',
    size: "h1"
}