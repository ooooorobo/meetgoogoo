import styles from 'src/widgets/GenerateFormLink/GenerateFormLink.module.css';
import { Link, Refresh } from 'src/shared/ui/icons';
import { Button } from 'src/shared/ui/Button/Button';
import { Theme } from 'src/shared/styles/constants';
import { IconBoxButton } from '../../shared/ui/IconBoxButton/IconBoxButton';
import { Toggle } from 'src/shared/ui/Toggle/Toggle';

export const GenerateFormBottomSheetContentView = ({
  isOpen,
  onClickCopyLink,
  onClickRegenerate,
  onClickShareKakao,
  onToggleLinkOpen,
}: {
  isOpen: boolean;
  onClickCopyLink: () => void;
  onClickRegenerate: () => void;
  onClickShareKakao: () => void;
  onToggleLinkOpen: (value: boolean) => void;
}) => {
  return (
    <div className={styles.Container}>
      <div className={styles.TitleSection}>
        <h2>
          소개팅을 원하는 지인에게
          <br />
          자기소개 입력 요청을 보내보세요.
        </h2>
        <small className={styles.Description}>소개를 받고싶어 하는 지인의 정보를 저장하세요.</small>
      </div>
      <div className={`${styles.ButtonWrapper} share-link-wrapper`}>
        <IconBoxButton icon={<Link />} text={'링크 복사'} onClick={onClickCopyLink} />
        <IconBoxButton
          icon={<img src="/images/kakao.png" alt="카카오톡으로 공유하기" width={29} height={29} />}
          iconBackgroundColor={Theme.color.kakao}
          text={'카카오톡 공유'}
          onClick={onClickShareKakao}
        />
      </div>
      <div className={styles.LinkConfigSection}>
        <h3>링크 설정</h3>
        <div className={styles.LinkConfig}>
          <p>기존 링크 활성화</p>
          <Toggle onToggle={onToggleLinkOpen} checked={isOpen} />
        </div>
        <div className={styles.LinkConfig}>
          <p>새로운 링크 생성</p>
          <Button variant={'ghost'} widthType={'hug'} color={'primary'} size={'fit'} onClick={onClickRegenerate}>
            <Refresh color={Theme.color.primary} />
          </Button>
        </div>
      </div>
    </div>
  );
};
