import styles from '../../../../../shared/ui/Profile/Profile.module.css';
import { ProfileCellHeader } from '../../../../../shared/ui/Profile/ProfileCellHeader';
import { getReligionText } from '../../../lib/getReligionText';
import { AvatarList } from '../../../../../shared/ui/AvatarList/AvatarList';
import { getJobText } from '../../../lib/getJobText';
import { getLocationText } from '../../../lib/getLocationText';
import { calculateAge, convertDateObjectToDate } from '../../../../../shared/vo/date';
import { useTranslation } from 'react-i18next';
import { MyProfile } from '../../../model/myProfileStore';
import { EditProfileFunction } from 'src/pages/form/confirm/ProfileEditContext';

export const PersonalInfoGrid = ({
  profile,
  onClickEdit,
}: {
  profile: MyProfile;
  onClickEdit?: EditProfileFunction;
}) => {
  const { t } = useTranslation();
  const age = calculateAge(convertDateObjectToDate(profile.birthDate));
  return (
    <div className={styles.Grid}>
      <div className={styles.GridRow}>
        <div className={styles.Cell}>
          <ProfileCellHeader title={'이름'} onClickEdit={() => onClickEdit?.('name')} />
          <span>{profile.name}</span>
        </div>
        <div className={styles.Cell}>
          <ProfileCellHeader title={'성별'} onClickEdit={() => onClickEdit?.('name')} />
          <span>{t(profile.gender)}</span>
        </div>
      </div>
      <div className={styles.GridRow}>
        <div className={styles.Cell}>
          <ProfileCellHeader title={'나이'} onClickEdit={() => onClickEdit?.('name')} />
          <span>
            {age}세 ({profile.birthDate.year}년 {profile.birthDate.month}월)
          </span>
        </div>
        <div className={styles.Cell}>
          <ProfileCellHeader title={'키(신장)'} onClickEdit={() => onClickEdit?.('name')} />
          <span>{profile.height}cm</span>
        </div>
      </div>
      <div className={styles.GridRow}>
        <div className={styles.Cell}>
          <ProfileCellHeader title={'MBTI'} onClickEdit={() => onClickEdit?.('name')} />
          <span>{profile.mbti}</span>
        </div>
        <div className={styles.Cell}>
          <ProfileCellHeader title={'종교'} onClickEdit={() => onClickEdit?.('name')} />
          <span>{getReligionText(profile.religion)}</span>
        </div>
      </div>
      <div className={styles.GridRow}>
        <div className={styles.Cell}>
          <ProfileCellHeader title={'업로드 사진'} onClickEdit={() => onClickEdit?.('name')} />
          <div className={styles.HorizontalList}>
            <AvatarList files={profile.images} />
          </div>
        </div>
      </div>
      <div className={styles.GridRow}>
        <div className={styles.Cell}>
          <ProfileCellHeader title={'신분'} onClickEdit={() => onClickEdit?.('name')} />
          <span>{getJobText(profile.job)}</span>
        </div>
      </div>
      <div className={styles.GridRow}>
        <div className={styles.Cell}>
          <ProfileCellHeader title={'주로 머무는 지역'} onClickEdit={() => onClickEdit?.('name')} />
          <span>{profile.location.map(getLocationText).join(', ')}</span>
        </div>
      </div>
    </div>
  );
};
