import React, { Dispatch, FC, ReactNode, SetStateAction, useState } from "react";
import { Expense } from "../interfaces/Models";
import ManagerService from "../services/ManagerService";

interface IExpenseList{
    totalSetter: Dispatch<SetStateAction<number>>
}

interface IExpenseItem{
    expense : Expense
    deleteMethod : (id : number) => void
    editMethod: (id : number, editedExpense : Expense) => Expense 
}

const ExpenseList : FC<IExpenseList> = ({totalSetter}) => {

    const [expenseList, setExpenseList] = useState<Expense[]>([]);
    const [newExpenseName, setNewExpenseName] = useState<string>("");
    const [newExpenseCost, setNewExpenseCost] = useState<number>(0);

    const newExpense = () : Expense | null => {
        if(newExpenseCost > 0 || newExpenseName.length !== 0){
            return {
                name: newExpenseName,
                cost: newExpenseCost
            };
        }

        return null;
    }


    const create = () => {
        const expense = newExpense();
        if(expense !== null){
            ManagerService.postExpense(expense);
        } else {
            console.debug("Name or cost was not supplied, invalid input.")
        } 
    }

    const edit = (id : number) => {
        const editedExpense = newExpense();
        if(editedExpense !== null){
            ManagerService.putExpense(id, editedExpense)
            return ManagerService.getExpense
        }
    }

    const remove = (id : number) => {
        ManagerService.deleteExpense(id)                
    }

    const updateUI = () : React.JSX.Element[] => {
        return expenseList.map((expense, index) => (
           <ExpenseItem key={index} expense={expense} deleteMethod={remove} editMethod={edit} />  
        ))
    }

    return(
        <div>
            {updateUI()}
        </div>
    );
}

const ExpenseItem : FC<IExpenseItem> = ({expense, deleteMethod, editMethod}) => {

    const removeSelf = () => {
        deleteMethod(expense.id!!)
    }

    return(
        <div className="flex flex-col">
            <input 
                type="button" 
                value="Remove" 
                onClick={removeSelf}
            />
            

        </div>
    );
} 

export default ExpenseList;