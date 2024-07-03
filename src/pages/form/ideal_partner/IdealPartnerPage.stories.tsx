import { Meta, StoryObj } from '@storybook/react';
import { IdealPartnerPage } from 'src/pages/form/ideal_partner/IdealPartnerPage';
import { useProfileFirstName } from 'src/entities/profile/lib/useProfileFirstName';
import { useIdlePartnerStore } from 'src/entities/ideal_partner/model/idealPartnerStore';

const meta: Meta<typeof IdealPartnerPage> = {
  component: IdealPartnerPage,
};

export default meta;
type Story = StoryObj<typeof IdealPartnerPage>;

export const Default: Story = {
  args: {},
  decorators: [
    (fn) => {
      const store = useIdlePartnerStore();
      const firstName = useProfileFirstName();
      return (
        <div style={{ height: 'calc(100vh - 32px)', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
          <div>{fn()}</div>
          <div>
            <span>{firstName}</span>
            <textarea style={{ height: '100%', width: '100%' }} readOnly value={JSON.stringify(store, null, '\t')} />
          </div>
        </div>
      );
    },
  ],
};
