import Option from "./Option";

const currencyOption = [
    {
        id: "EUR",
        value: "eur",
        title: "EUR"
    },
    {
        id: "USD",
        value: "usd",
        title: "USD"
    },
    {
        id: "CHF",
        value: "chf",
        title: "CHF"
    }
    ];

function Section() {
    return (
        <div className="div_converter main">
            <input type="number" id="inputValue" className="currency_value_from_input" min="0"/>
            <select id="selectCurrency">
               {currencyOption.map(currency => (
                <Option id={currency} value={value} title={currency}/>
               ))}
            </select>
            <button id="convert" className="btn">Convert</button>
            <p>is:</p>
            <span type="number" id="spanValue" className="span"></span>
            <span className="span">PLN</span>

        </div>
    )
}
export default Section;