import React, { Dispatch, FC, ReactNode, SetStateAction, useState } from "react";
import { Expense } from "../interfaces/Models";

interface IExpenseList{
    totalSetter: Dispatch<SetStateAction<number>>
}
interface IExpenseItem{
    expense : Expense
}

const ExpenseList : FC<IExpenseList> = ({totalSetter}) => {

    const [expenseList, setExpenseList] = useState<Expense[]>([])

    const updateUI = () : React.JSX.Element[] => {
        return expenseList.map((expense, index) => (
           <ExpenseItem key={index} expense={expense} />  
        ))
    }

    return(
        <div>
            {updateUI()}
        </div>
    );
}

const ExpenseItem : FC<IExpenseItem> = ({expense}) => {


    return(
        <>
        </>
    );
} 