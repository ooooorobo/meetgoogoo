import { TextArea } from 'src/shared/ui/TextArea/TextArea';
import styles from 'src/domains/candidates/ideal_partner/processes/ideal_partner/ToMatcherForm/ToMatcherForm.module.css';
import { useIdealPartnerStore } from 'src/domains/candidates/ideal_partner/entities/models/idealPartnerStore';

export const ToMatcherForm = () => {
  const value = useIdealPartnerStore((state) => state.toMatchMaker);
  const setValue = useIdealPartnerStore((state) => state.setToMatchMaker);

  return (
    <section className={styles.Container}>
      <TextArea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={'이상형 참고 사항, 주선자에게 부탁하는 말 등 최대 500자까지 입력할 수 있습니다.'}
        maxLength={500}
      />
    </section>
  );
};
