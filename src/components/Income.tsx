import React, { useState, useEffect, Dispatch, SetStateAction, FC } from "react";
import NumberInput from "./NumberInput";

interface IHandler { //Calc is short for calculator chat im just using slang
  totalSetter: Dispatch<SetStateAction<number>>
}

const IncomeHandler: FC<IHandler> = ({ totalSetter }) => {

  const [baseHours, setRate] = useState<number>(0);
  const [ub1Hours, setUb1Hours] = useState<number>(0);
  const [ub2Hours, setUb2Hours] = useState<number>(0);
  const [ub3Hours, setUb3Hours] = useState<number>(0);
  const [ub4Hours, setUb4Hours] = useState<number>(0);

  const gross = (): number => {
    return (baseHours * 180) + (ub1Hours * 22) + (ub2Hours * 45) + (ub3Hours * 55) + (ub4Hours * 110);
  }

  const [stipend, setStipend] = useState<number>(0);

  useEffect(() => {
    totalSetter(gross());
  }, [baseHours, ub1Hours, ub2Hours, ub3Hours, ub4Hours])

  return (
    <section className="col-span-12 grid grid-cols-12 justify-self-center 
                            w-full items-center p-5 bg-gray-200 rounded-lg"
    >
      <h1 className="col-span-12 text-center text-xl mb-3">Income</h1>

      <div className="col-span-12 flex flex-col justify-self-center 
                            gap-2 w-44 items-center">
        <h2 className="col-span-12 text-lg text-center font-bold mb-2">Work</h2>
        <NumberInput addStyles=""
          value={baseHours}
          setValue={setRate}
          previewValue={180}
        />
        <NumberInput addStyles=""
          value={ub1Hours}
          setValue={setUb1Hours}
          previewValue={22}
        />
        <NumberInput addStyles=""
          value={ub2Hours}
          setValue={setUb2Hours}
          previewValue={45}
        />
        <NumberInput addStyles=""
          value={ub3Hours}
          setValue={setUb3Hours}
          previewValue={55}
        />
        <NumberInput addStyles=""
          value={ub4Hours}
          setValue={setUb4Hours}
          previewValue={110}
        />

      </div>
      <div className="col-span-12 flex flex-col items-center">
        <h2 className="text-center text-lg font-bold mt-3">Stipend</h2>
        <div className="w-min rounded-md border border-black flex-row m-1 p-1 flex items-center justify-center bg-white">
          <input className="w-20 text-start"
            type="number"
            value={stipend}
            onChange={e => setStipend(parseInt(e.target.value))}
          />
          <h3 className="w-min ms-2 text-">NOK</h3>
        </div>
      </div>

    </section>
  )
}

export default IncomeHandler;
