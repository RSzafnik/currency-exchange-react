import styles from "./ConvertButton.module.css";

const ConvertButton = () => {
  return (
    <button type="submit" id="convertToPLN" className={styles.ConvertButton}>
      Przelicz na złotówki
    </button>
  );
};

export default ConvertButton;
