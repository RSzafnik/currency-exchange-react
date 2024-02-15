import styles from "./Header.module.css";
import Image from "./Image/Image.js";
import Title from "./Title/Title.js";

const Header = () => {
  return (
    <header className={styles.Header}>
      <Image />
      <Title />
    </header>
  );
};

export default Header;
