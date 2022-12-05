import React from "react";


function Option({currency},{value}) {
    return (
    
        <option id={currency} value = {value}>{currency}</option>
                
    )
}
export default Option;