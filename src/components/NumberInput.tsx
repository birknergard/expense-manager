import React, { FC, Dispatch, SetStateAction } from "react";

interface INumberInput {
    value : number,
    setValue : Dispatch<SetStateAction<number>>
    addStyle? : string
}

const NumberInput : FC<INumberInput> = ({value, setValue, addStyle}) => {
    return(
        <input className={`p-1 rounded-mb ${addStyle}`}
            value={value}
            onChange = {(e) => setValue(e.current.value)}
            type="number" 
        />
    );
}

export default NumberInput;