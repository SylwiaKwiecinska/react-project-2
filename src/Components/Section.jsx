import Button from "./Button";
import Option from "./Option";
import Span from "./Span";

const currencyOption = [
    {
        id: "EUR",
        value: "eur"
    },
    {
        id: "USD",
        value: "usd"
    },
    {
        id: "CHF",
        value: "chf"
    }
    ];

function Section() {
    return (
        <div className="div_converter main">
            <input type="number" id="inputValue" className="currency_value_from_input" min="0"/>
            <select id="selectCurrency">
               {currencyOption.map(({id, value}) => (
                <Option id={id} value={value}>{id}</Option>
               ))}
            </select>
           <Button/>
            <Span/>

        </div>
    )
}
export default Section;