import styles from "./AmountInput.module.css";
const AmountInput = ({ amount, onAmountChange }) => {
  return (
    <input
      type="number"
      value={amount}
      onChange={onAmountChange}
      className={styles.amount}
      name="amount"
      placeholder="Wprowadź kwotę"
      required
      step="0.01"
    />
  );
};

export default AmountInput;
