import React from "react";


function Option({id},{value}) {
    return (
    
        <option id={id} value = {value}>{id}</option>
                
    )
}
export default Option;