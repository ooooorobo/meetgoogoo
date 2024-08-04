import { Tab } from 'src/shared/ui/Tab/Tab';
import { ScrollView } from 'src/shared/ui/ScrollView/ScrollView';
import { MyProfileView } from 'src/entities/profile/ui/MyProfile/MyProfile';
import { IdealPartnerProfile } from 'src/entities/ideal_partner/ui/IdealPartnerProfile/IdealPartnerProfile';
import { MyProfile } from 'src/entities/profile/model/myProfileStore';
import { IdealPartner } from 'src/entities/ideal_partner/model/idealPartnerStore';
import styles from './ProfileTab.module.css';
import { PropsWithChildren } from 'react';

const TAB_TYPE_LIST = ['PROFILE', 'IDEAL_PARTNER'] as const;
type TabType = (typeof TAB_TYPE_LIST)[number];

type ProfileTabProps = {
  profile: MyProfile;
  idealPartner: IdealPartner;
  initialOpen?: boolean;
};

export const ProfileTab = ({ profile, idealPartner, initialOpen }: ProfileTabProps) => {
  return (
    <ProfileTab.Root>
      <ProfileTab.TriggerList />
      <ScrollView rootClassName={styles.ContentSection} viewportClassName={styles.ContentViewport}>
        <ProfileTab.Content profile={profile} idealPartner={idealPartner} initialOpen={initialOpen} />
      </ScrollView>
    </ProfileTab.Root>
  );
};

ProfileTab.Root = function Root({ children }: PropsWithChildren) {
  return <Tab<TabType> initialTab={'PROFILE'}>{children}</Tab>;
};

ProfileTab.TriggerList = function TriggerList({ className = '' }: { className?: string }) {
  return (
    <Tab.List className={className}>
      <Tab.Trigger tabType={'PROFILE'} name={'자기 소개'} />
      <Tab.Trigger tabType={'IDEAL_PARTNER'} name={'이상형 정보'} />
    </Tab.List>
  );
};

ProfileTab.Content = function Content({ profile, idealPartner, initialOpen }: ProfileTabProps) {
  return (
    <>
      <Tab.Content tabType={'PROFILE'}>
        <MyProfileView profile={profile} initialOpen={initialOpen} />
      </Tab.Content>
      <Tab.Content tabType={'IDEAL_PARTNER'}>
        <IdealPartnerProfile profile={idealPartner} />
      </Tab.Content>
    </>
  );
};
