import React, {useState, useEffect} from "react";
import NumberInput from "./NumberInput";

const Calculator = () => {

    const [baseHours, setRate] = useState<number>(0)
    const [ub1Hours, setUb1Hours] = useState<number>(0)
    const [ub2Hours, setUb2Hours] = useState<number>(0)
    const [ub3Hours, setUb3Hours] = useState<number>(0)
    const [ub4Hours, setUb4Hours] = useState<number>(0)

    const gross = () : number => {
        return (baseHours * 180) + (ub1Hours * 22) + (ub2Hours * 45) + (ub3Hours * 55) + (ub4Hours * 110);
    }

    const net = (tax : number) => {
        return gross() * tax
    }

    useEffect(() => {

    }, [baseHours, ub1Hours, ub2Hours, ub3Hours, ub4Hours])

    return(
        <div>
            <NumberInput addStyles="border border-black" 
                value={baseHours}
                setValue={setRate}
                previewValue={180}
            />
            <NumberInput addStyles="border border-black" 
                value={ub1Hours}
                setValue={setUb1Hours}
                previewValue={22}
            />
            <NumberInput addStyles="border border-black" 
                value={ub2Hours}
                setValue={setUb2Hours}
                previewValue={45}
            />
            <NumberInput addStyles="border border-black" 
                value={ub3Hours}
                setValue={setUb3Hours}
                previewValue={55}
            />
            <NumberInput addStyles="border border-black" 
                value={ub4Hours}
                setValue={setUb4Hours}
                previewValue={110}
            />
        </div>
    )
}

export default Calculator