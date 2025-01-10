import React, { useState } from "react"
import Calculator from "../components/Calculator";
import ExpenseList from "../components/Expenses";

const Main = () => {
    const [gross, setGross] = useState<number>(0);
    const [expense, setExpense] = useState<number>(0);
    const [income, setIncome] = useState<number>(0);

    return (
        <>
            <header className="fixed top-0 left-0 bg-red-200 p-5 w-full">
                <h1>Expenses</h1>
            </header>
            <main className="grid grid-cols-12 w-screen mt-20 w-4/5 bg-amber-100 content-center">
                <Calculator
                    totalSetter={setGross}
                />
                <ExpenseList 
                    totalSetter={setExpense}
                />
            </main>
        </>
    )
}

export default Main;