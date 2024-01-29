import styles from "./App.module.css";
import Header from "./components/Header/Header.js";
import Form from "./components/Form/Form.js";
const App = () => {
  return (
    <div className={styles.App}>
      <Header />
      <Form />
    </div>
  );
};

export default App;
