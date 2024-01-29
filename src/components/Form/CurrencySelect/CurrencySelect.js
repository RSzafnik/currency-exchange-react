import styles from "./CurrencySelect.module.css";
const CurrencySelect = ({ currency, onCurrencyChange }) => {
  return (
    <select
      value={currency}
      onChange={onCurrencyChange}
      className={styles.currency}
    >
      <option value="USD">Dolar amerykański (USD)</option>
      <option value="EUR">Euro (EUR)</option>
      <option value="CHF">Frank szwajcarski (CHF)</option>
    </select>
  );
};
export default CurrencySelect;
