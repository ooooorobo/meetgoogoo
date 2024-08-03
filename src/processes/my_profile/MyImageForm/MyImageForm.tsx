import styles from './MyImageForm.module.css';
import { InfoBox } from 'src/shared/ui/InfoBox/InfoBox';
import { useMyProfileStore } from 'src/entities/profile/model/myProfileStore';
import { AvatarList } from 'src/shared/ui/AvatarList/AvatarList';

export const MyImageForm = () => {
  const files = useMyProfileStore((state) => state.images) ?? [];
  const setFiles = useMyProfileStore((state) => state.setSelfImages);

  return (
    <section className={styles.Container}>
      <AvatarList files={files} setFiles={setFiles} maxFileCount={10} />
      <InfoBox className={styles.InfoBox} radiusSize={'M'}>
        <h3>사진 업로드 TIP!</h3>
        <div className={styles.InfoWrapper}>
          <h3 className={styles.Positive}>이런 사진은 호감을 더 얻을 수 있어요.</h3>
          <ul className={styles.InfoUl}>
            <li>옷 스타일을 참고할 수 있는 전신사진</li>
            <li>정면 사진 (잘나온 증명사진, 배경이 깔끔한 사진 등)</li>
          </ul>
        </div>
        <div className={styles.InfoWrapper}>
          <h3 className={styles.Negative}>이런 사진은 피해주세요.</h3>
          <ul className={styles.InfoUl}>
            <li>뒷모습, 흔들린 사진 등 판단이 어려운 사진</li>
            <li>보정이 심하게 들어가 실제 모습과 차이가 있는 사진</li>
          </ul>
        </div>
      </InfoBox>
    </section>
  );
};
