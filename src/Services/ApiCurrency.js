const fetchCurrencyRate = (currency) => {
  return fetch(
    `https://api.nbp.pl/api/exchangerates/rates/a/${currency}/?format=json`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Błąd sieci lub odpowiedź API nie jest prawidłowa");
      }
      return response.json();
    })
    .then((data) => {
      if (
        !data.rates ||
        !data.rates.length ||
        typeof data.rates[0].mid !== "number"
      ) {
        throw new Error("Nieprawidłowe dane z API");
      }
      return data.rates[0].mid;
    });
};

export { fetchCurrencyRate };
