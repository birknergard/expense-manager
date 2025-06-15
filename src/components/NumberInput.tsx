import React, { FC, Dispatch, SetStateAction } from "react";

interface INumberInput {
  value: number,
  setValue: Dispatch<SetStateAction<number>>
  previewValue: number
  addStyles?: string
}

const NumberInput: FC<INumberInput> = ({
  value,
  setValue,
  addStyles,
  previewValue
}) => {
  return (


    <div className={`flex flex-row w-full items-center justify-between ${addStyles}`}>
      <input className="w-16 border border-black rounded-md p-1"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
        type="number"
      />

      <h2 className="text-md text-end">
        {`${previewValue} NOK`}
      </h2>
    </div>
  );
}

export default NumberInput;
