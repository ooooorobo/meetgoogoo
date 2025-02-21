import styles from 'src/widgets/GenerateFormLink/GenerateFormLink.module.css';
import { Plus } from 'src/shared/ui/icons';
import { Theme } from 'src/shared/styles/constants';
import { HTMLProps } from 'react';

export const ProfileAddFloatingButton = ({
  className = '',
  onClick,
  ...props
}: HTMLProps<HTMLButtonElement> & { onClick: () => void }) => {
  return (
    <button className={`${className} ${styles.FloatingButton}`} onClick={onClick} {...props} type={'button'}>
      <Plus color={Theme.color.neutral0} width={24} />
      <span>후보 추가</span>
    </button>
  );
};
