import styles from './AgeForm.module.css';
import { useIdlePartnerStore } from 'src/entities/ideal_partner/model/idealPartnerStore';
import { RangeSlider } from 'src/shared/ui/RangeSlider/RangeSlider';
import { useProfileAge } from 'src/entities/profile/lib/useProfileAge';

const AGE_GAP = 20;
const ADULT_AGE = 19;
const MIN_AGE = 15;

export const AgeForm = () => {
  const age = useProfileAge();
  const { min, max } = useIdlePartnerStore((state) => state.ageRange);

  const minAge = Math.max(age >= ADULT_AGE ? Math.max(ADULT_AGE, age - AGE_GAP) : age - AGE_GAP, MIN_AGE);
  const maxAge = age <= ADULT_AGE ? Math.min(age + AGE_GAP, ADULT_AGE) : age + AGE_GAP;

  const setMin = useIdlePartnerStore((state) => state.setMinAge);
  const setMax = useIdlePartnerStore((state) => state.setMaxAge);

  const onChange = ([min, max]: [number, number]) => {
    setMin(min);
    setMax(max);
  };

  return (
    <section className={styles.Container}>
      <RangeSlider
        min={minAge}
        max={maxAge}
        minLabel={`${minAge}세`}
        maxLabel={`${maxAge}세`}
        step={1}
        defaultValue={[min, max]}
        disabled={false}
        onChanged={onChange}
      />
    </section>
  );
};
