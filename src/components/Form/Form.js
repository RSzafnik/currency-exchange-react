import React, { useState } from "react";
import styles from "./Form.module.css";
import LabelForCurrency from "./LabelForCurrency/LabelForCurrency.js";
import CurrencySelect from "./CurrencySelect/CurrencySelect.js";
import Result from "./Result/Result.js";
import LabelForAmount from "./LabelForAmount/LabelForAmount.js";
import AmountInput from "./AmountInput/AmountInput.js";
import ConvertButton from "./ConvertButton/ConvertButton.js";
import Loader from "./Loader/Loader.js";
import { fetchCurrencyRate } from "../../Services/ApiCurrency.js";
import ErrorMessage from "./ErrorMessage/ErrorMessage.js";
import {
  handleAmountChange,
  handleCurrencyChange,
  handleSubmit,
  convertCurrency,
} from "../../Utils/Helpers.js";

const Form = () => {
  const [currency, setCurrency] = useState("USD");
  const [amount, setAmount] = useState("0");
  const [convertedAmount, setConvertedAmount] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const boundHandleCurrencyChange = (event) =>
    handleCurrencyChange(setCurrency, setAmount, setConvertedAmount, event);
  const boundHandleAmountChange = (event) =>
    handleAmountChange(setAmount, setErrorMessage, event);
  const boundHandleSubmit = (event) =>
    handleSubmit(() => boundConvertCurrency(), event);
  const boundConvertCurrency = () =>
    convertCurrency(
      setErrorMessage,
      setIsLoading,
      fetchCurrencyRate,
      currency,
      amount,
      setConvertedAmount
    );

  return (
    <form
      id="currencyForm"
      className={styles.currencyForm}
      onSubmit={boundHandleSubmit}
    >
      <LabelForCurrency />
      <CurrencySelect
        currency={currency}
        onCurrencyChange={boundHandleCurrencyChange}
      />
      <LabelForAmount />
      <AmountInput amount={amount} onAmountChange={boundHandleAmountChange} />
      <ConvertButton />
      {isLoading && <Loader />}
      <ErrorMessage message={errorMessage} />
      <Result convertedAmount={convertedAmount} />
    </form>
  );
};

export default Form;
