import styles from "./LabelForCurrency.module.css";
const LabelForCurrency = () => {
  return (
    <label id="currency" className={styles.currencyLabel}>
      Wybierz walutę:
    </label>
  );
};
export default LabelForCurrency;
