import React, { Dispatch, FC, ReactNode, SetStateAction, useState } from "react";
import { Expense } from "../interfaces/Models";

interface IExpenseList{
    totalSetter: Dispatch<SetStateAction<number>>
}

interface IExpenseItem{
    expense : Expense
    deleteMethod : () => void
}

const ExpenseList : FC<IExpenseList> = ({totalSetter}) => {

    const [expenseList, setExpenseList] = useState<Expense[]>([]);

    const remove = () => {
                        
    }

    const updateUI = () : React.JSX.Element[] => {
        return expenseList.map((expense, index) => (
           <ExpenseItem key={index} expense={expense} deleteMethod={} />  
        ))
    }

    return(
        <div>
            {updateUI()}
        </div>
    );
}

const ExpenseItem : FC<IExpenseItem> = ({expense, deleteMethod}) => {

    return(
        <div className="flex flex-col">
            <input 
                type="button" 
                value="+" 
                onClick={delete}
            />

        </div>
    );
} 

export default ExpenseList;