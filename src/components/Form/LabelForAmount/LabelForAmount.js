import styles from "./LabelForAmount.module.css";
const LabelForAmount = () => {
  return (
    <label id="amount" className={styles.currencyLabel}>
      Wprowadź kwotę:
    </label>
  );
};

export default LabelForAmount;
