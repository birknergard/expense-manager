import React, { FC, Dispatch, SetStateAction } from "react";

interface INumberInput {
    value : number,
    setValue : Dispatch<SetStateAction<number>>
    previewValue : number
    addStyles? : string
}

const NumberInput : FC<INumberInput> = ({
    value, 
    setValue, 
    addStyles, 
    previewValue
}) => {
    return(
        <div className="flex flex-row w-full">
            <input className={`w-20 my-1 p-1 rounded-mb text-lg border border-black ${addStyles}`}
                value={value}
                onChange = {(e) => setValue(parseInt(e.target.value))}
                type="number" 
            />
            <h2>
                x {previewValue}
            </h2>
        </div>
    );
}

export default NumberInput;