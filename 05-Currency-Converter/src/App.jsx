import { useEffect, useState } from "react";
import InputBox from "./components/InputBox";

function App() {
  const [currencyOptions, setCurrenctOptions] = useState([]);
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [exchangeRate, setExchangeRate] = useState();
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  let toAmount, fromAmount;
  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  async function getCurrenciesOptions() {
    const response = await fetch(`https://api.frankfurter.app/latest`);
    const data = await response.json();
    setCurrenctOptions(Object.keys(data.rates));
  }

  useEffect(() => {
    getCurrenciesOptions();
  }, []);

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      fetch(
        `https://api.frankfurter.app/latest?from=${fromCurrency}&to=${toCurrency}`
      )
        .then((res) => res.json())
        .then((data) => setExchangeRate(data.rates[toCurrency]));
    }
  }, [fromCurrency, toCurrency]);

  function handleFromAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  }

  function handleToAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  }

  function swapCurrencies() {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  }

  return (
    <>
      <h1 className="text-4xl font-bold text-white text-center m-5">
        Currency Converter
      </h1>
      <div className="container flex justify-center items-center flex-col gap-5 mt-[4rem]">
        <InputBox
          amount={fromAmount}
          currencies={currencyOptions}
          selectedCurrency={fromCurrency}
          onAmountChange={(e) => setAmount(e.target.value)}
          onCurrencyChange={(e) => setFromCurrency(e.target.value)}
          onChangeAmount={handleFromAmountChange}
        />
        <button
          className="border border-black py-1 px-3 rounded bg-blue-500 text-xl"
          onClick={swapCurrencies}
        >
          Swap
        </button>
        <InputBox
          amount={toAmount}
          currencies={currencyOptions}
          selectedCurrency={toCurrency}
          onAmountChange={(e) => setAmount(e.target.value)}
          onCurrencyChange={(e) => setToCurrency(e.target.value)}
          onChangeAmount={handleToAmountChange}
        />
      </div>
    </>
  );
}

export default App;
