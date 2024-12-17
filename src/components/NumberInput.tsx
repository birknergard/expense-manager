import React, { FC, Dispatch, SetStateAction } from "react";

interface INumberInput {
    value : number,
    setValue : Dispatch<SetStateAction<number>>
    previewValue : string
    addStyle? : string
}

const NumberInput : FC<INumberInput> = ({
    value, 
    setValue, 
    addStyle, 
    previewValue
}) => {
    return(
        <div className="flex flex-row">
            <input className={`p-1 rounded-mb text-lg ${addStyle}`}
                value={value}
                onChange = {(e) => setValue(e.current.value)}
                type="number" 
            />
            <h2>
                * {previewValue}
            </h2>
        </div>
    );
}

export default NumberInput;