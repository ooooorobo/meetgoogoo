import { ProfileSummary } from 'src/domains/candidates/info/entities/types/profileSummary';
import styles from 'src/domains/candidates/components/ProfileCardGrid/ProfileCardGrid.module.css';
import { Link } from '@remix-run/react';
import { ReactElement } from 'react';
import { ProfileSmallCard } from 'src/domains/candidates/info/components/ProfileSmallCard/ProfileSmallCard';

type Props = {
  profileList: ProfileSummary[];
  profileActionSlot?: (profile: ProfileSummary) => ReactElement;
};

export const ProfileCardGrid = ({ profileList, profileActionSlot }: Props) => {
  return (
    <ul className={styles.Container}>
      {profileList.map((profile) => (
        <li key={profile.name + profile.birthDate}>
          <Link to={`/profile/${profile.id}`}>
            <ProfileSmallCard profile={profile} topRightSlot={profileActionSlot?.(profile)} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
