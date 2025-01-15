import React, {useState, useEffect, Dispatch, SetStateAction, FC} from "react";
import NumberInput from "./NumberInput";

interface IHandler { //Calc is short for calculator chat im just using slang
    totalSetter : Dispatch<SetStateAction<number>>
}

const IncomeHandler : FC<IHandler> = ({totalSetter}) => {

    const [baseHours, setRate] = useState<number>(0);
    const [ub1Hours, setUb1Hours] = useState<number>(0);
    const [ub2Hours, setUb2Hours] = useState<number>(0);
    const [ub3Hours, setUb3Hours] = useState<number>(0);
    const [ub4Hours, setUb4Hours] = useState<number>(0);

    const gross = () : number => {
        return (baseHours * 180) + (ub1Hours * 22) + (ub2Hours * 45) + (ub3Hours * 55) + (ub4Hours * 110);
    }

    const [stipend, setStipend] = useState<number>(0);

    useEffect(() => {
        totalSetter(gross());
    }, [baseHours, ub1Hours, ub2Hours, ub3Hours, ub4Hours])

    return(
        <section className="w-full mt-10 col-span-12 bg-amber-200">
            <h1 className="col-span-12 text-center text-xl">Income Sources</h1>

            <h2 className="col-span-12 text-lg text-center">Work</h2>

            <div className="grid grid-cols-12 gap-2 p-2 items-center">
                <NumberInput addStyles="col-span-12" 
                    value={baseHours}
                    setValue={setRate}
                    previewValue={180}
                />
                <NumberInput addStyles="col-span-6" 
                    value={ub1Hours}
                    setValue={setUb1Hours}
                    previewValue={22}
                />
                <NumberInput addStyles="col-span-6" 
                    value={ub2Hours}
                    setValue={setUb2Hours}
                    previewValue={45}
                />
                <NumberInput addStyles="col-span-6" 
                    value={ub3Hours}
                    setValue={setUb3Hours}
                    previewValue={55}
                />
                <NumberInput addStyles="col-span-6" 
                    value={ub4Hours}
                    setValue={setUb4Hours}
                    previewValue={110}
                />
                <h2 className="col-span-12 text-center text-lg mt-3">Stipend</h2>
                <div className="col-span-12 flex flex-row items-center justify-center">
                    <input className="min-w-2 text-start border-l border-y border-black bg-white"
                        type="number" 
                        value={stipend}
                        onChange={e => setStipend(parseInt(e.target.value))}
                    />
                    <h3 className="min-w-2 text-start border border-r border-y border-black bg-white">NOK</h3>
                </div>
            </div>

        </section>
    )
}

export default IncomeHandler;