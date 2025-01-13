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
        <div className={`gap-2 flex flex-row w-full items-center justify-center ${addStyles}`}>
            <input className="col-span-4 max-w-16 my-1 p-1 rounded-md text-md border border-black"
                value={value}
                onChange = {(e) => setValue(parseInt(e.target.value))}
                type="number" 
            />
            <h2 className="col-span-4 text-md text-center">
                times
            </h2>

            <h2 className="col-span-4 text-md text-center">
                {`${previewValue} NOK`}
            </h2>
        </div>
    );
}

export default NumberInput;