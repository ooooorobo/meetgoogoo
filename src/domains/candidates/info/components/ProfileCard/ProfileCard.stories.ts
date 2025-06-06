import { Meta, StoryObj } from '@storybook/react';
import { ProfileCard } from 'src/domains/candidates/info/components/ProfileCard/ProfileCard';
import { profileMock } from 'src/domains/candidates/info/entities/mocks/profile.mock';

const meta: Meta<typeof ProfileCard> = {
  component: ProfileCard,
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Default: Story = {
  args: { profile: profileMock },
};
