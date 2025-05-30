import { Meta, StoryObj } from '@storybook/react';
import { PasswordForm } from 'src/domains/auth/processes/signup/PasswordForm/PasswordForm';

const meta: Meta<typeof PasswordForm> = {
  component: PasswordForm,
};

export default meta;
type Story = StoryObj<typeof PasswordForm>;

export const Default: Story = {
  args: {},
};
