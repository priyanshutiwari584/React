import React from "react";

function InputBox({
  amount,
  currencies,
  onChangeAmount,
  onCurrencyChange,
  selectedCurrency,
}) {
  return (
    <div className="max-w-[36rem]  rounded-md border  border-white p-4 ">
      <div className="flex items-center gap-2">
        <input
          className="w-full rounded border border-black outline-0 p-2 focus:ring-2 ring-blue-400 focus:border-0"
          type="number"
          value={amount.toString()}
          onChange={onChangeAmount}
        />
        <select
          className="w-[5rem] h-8 border bg-slate-300 rounded focus:outline-0"
          value={selectedCurrency}
          onChange={onCurrencyChange}
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
