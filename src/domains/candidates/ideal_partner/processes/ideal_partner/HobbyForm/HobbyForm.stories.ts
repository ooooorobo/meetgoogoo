import { Meta, StoryObj } from '@storybook/react';
import { HobbyForm } from 'src/domains/candidates/ideal_partner/processes/ideal_partner/HobbyForm/HobbyForm';

const meta: Meta<typeof HobbyForm> = {
  component: HobbyForm,
};

export default meta;
type Story = StoryObj<typeof HobbyForm>;

export const Default: Story = {
  args: {},
};
