import Option from "./Option";
import Span from "./Span";
import { useState, useEffect } from "react";

const currencyOption = ["EUR", "USD", "CHF"];

function Section() {
  const [amount, setAmount] = useState(0);
  const [currencyValue, setCurrencyValue] = useState(currencyOption[0]);
  const [result, setResult] = useState(0);

  useEffect(() => {
    updateCurrentlySelectedCurrencyValue(currencyValue);
  }, [currencyValue]);

  const updateCurrentlySelectedCurrencyValue = (currencyName) => {
    fetch(`https://api.nbp.pl/api/exchangerates/rates/a/${currencyName}`)
      .then((response) => response.json())
      .then((data) => setCurrencyValue(data.rates[0].mid));
  };

  return (
    <div className="div_converter">
      <input
        type="number"
        id="inputValue"
        className="currency_value_from_input"
        min="0"
        onKeyDown={(event) => {
          const regex = new RegExp(/^[0-9]*\.?[0-9]*$/);
          if (!(regex.test(event.key) || "Backspace" === event.key)) {
            event.preventDefault();
          }
        }}
        onChange={(event) => {
          setAmount(event.target.value);
        }}
      />
      <select
        id="selectCurrency"
        onChange={(event) =>
          updateCurrentlySelectedCurrencyValue(event.target.value)
        }
      >
        {currencyOption.map((option, index) => (
          <Option id={option} value={option} key={index}>
            {option}
          </Option>
        ))}
      </select>
      <input
        type="button"
        value="Convert"
        onClick={() => setResult(amount * currencyValue)}
      />
      <Span value={result.toFixed(2)} />
    </div>
  );
}
export default Section;
