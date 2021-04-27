import React from 'react';

import { Welcome } from './welcome';

export default {
  title: 'components/Welcome',
  component: Welcome,
};

const Template = (args) => <Welcome {...args} />;

export const Default = Template.bind({});
