export const handleCurrencyChange = (
  setCurrency,
  setAmount,
  setConvertedAmount,
  event
) => {
  setCurrency(event.target.value);
  setAmount("");
  setConvertedAmount("");
};
export const handleAmountChange = (setAmount, setErrorMessage, event) => {
  const newAmount = event.target.value;
  setAmount(newAmount);
  if (!isNaN(newAmount) && parseFloat(newAmount) > 0) {
    setErrorMessage("");
  }
};

export const handleSubmit = (convertCurrency, event) => {
  event.preventDefault();
  convertCurrency();
};
export const convertCurrency = (
  setErrorMessage,
  setIsLoading,
  fetchCurrencyRate,
  currency,
  amount,
  setConvertedAmount
) => {
  setIsLoading(true);

  const amountValue = parseFloat(amount);
  if (isNaN(amountValue) || amountValue <= 0) {
    setErrorMessage("Proszę wprowadzić poprawną kwotę.");
    setConvertedAmount("");
    setIsLoading(false);
    return;
  }
  setErrorMessage("");

  fetchCurrencyRate(currency)
    .then((rate) => {
      const convertedValue = rate * amountValue;
      setConvertedAmount(`Przeliczona kwota: ${convertedValue.toFixed(2)} PLN`);
    })
    .catch((error) => {
      setConvertedAmount("");
      setErrorMessage(error.message);
    })
    .finally(() => {
      setIsLoading(false);
    });
};
