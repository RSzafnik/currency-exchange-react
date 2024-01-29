import styles from "./Result.module.css";

const Result = ({ convertedAmount }) => {
  return (
    <div id="result" className={styles.Result}>
      {convertedAmount && <p>{convertedAmount}</p>}
    </div>
  );
};

export default Result;
