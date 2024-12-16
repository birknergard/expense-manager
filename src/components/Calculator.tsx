import React, {useState, useEffect} from "react";
import NumberInput from "./NumberInput";

const Calculator = () => {

    const [baseRate, setBaseRate] = useState<number>(0)

    return(
        <div>
            <NumberInput addStyles="border border-black" 
                value={baseRate}
                setValue={setBaseRate}
            />
        </div>
    )
}

export default Calculator