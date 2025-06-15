import React, { useState } from "react"
import Calculator from "../components/Income";
import ExpenseList from "../components/Expenses";
import IncomeHandler from "../components/Income";
import Overview from "../components/Overview";

const Main = () => {
  const [expense, setExpense] = useState<number>(0);
  const [income, setIncome] = useState<number>(0);

  return (
    <>
      <main className="grid grid-cols-12 mt-20 w-full gap-4 justify-items-center align-items-center">
        <Overview
          income={income}
          expenses={expense}
        />
        <IncomeHandler
          totalSetter={setIncome}
        />
        <ExpenseList
          totalSetter={setExpense}
        />
      </main>
    </>
  )
}

export default Main;
