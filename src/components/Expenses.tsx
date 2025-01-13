import React, { Dispatch, FC, ReactNode, SetStateAction, useEffect, useState } from "react";
import { Expense } from "../interfaces/Models";
import ManagerService from "../services/ManagerService";

interface IExpenseList{
    totalSetter: Dispatch<SetStateAction<number>>
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
            fetchListFromApi()
        } else {
            console.debug("Name or cost was not supplied, invalid input.")
        } 
    }

    const edit = (id : number) => {
        const editedExpense = newExpense();
        if(editedExpense !== null){
            ManagerService.putExpense(id, editedExpense);
            return ManagerService.getExpense(id);
        }
        return ManagerService.getExpense(id);
    }

    const remove = (id : number) => {
        ManagerService.deleteExpense(id)                
    }

    const updateUI = () : React.JSX.Element[] => {
        return expenseList.map((expense, index) => (
           <ExpenseItem key={index} expense={expense} deleteMethod={remove} editMethod={edit} />  
        ))
    }

    const fetchListFromApi = async() => {
       const response = await ManagerService.getAllExpenses();  
       setExpenseList(response);
    }

    useEffect(() => {
        fetchListFromApi()
    }, [expenseList])

    useEffect(() => {
        fetchListFromApi()
    }, [])

    return(
        <section className="flex flex-col bg-sky-200 col-span-12 p-2 justify-start">
            <h1 className="text-xl text-center">Expenses</h1>
            <div className="my-2">
                <h2 className="text-lg">Add New</h2>
                <ExpenseInput 
                    createMethod={create}             
                    expenseName={newExpenseName}
                    setName={setNewExpenseName}
                    cost={newExpenseCost}
                    setCost={setNewExpenseCost}
                />       
            </div>
            <h2 className="text-lg">Overview</h2>
            {updateUI()}
        </section>
    );

}

interface IExpenseItem{
    expense : Expense
    deleteMethod : (id : number) => void
    editMethod: (id : number, editedExpense : Expense) => Promise<Expense | null> 
}

const ExpenseItem : FC<IExpenseItem> = ({expense, deleteMethod, editMethod}) => {

    const removeSelf = () => {
        deleteMethod(expense.id!!)
    }

    return(
        <div className="flex flex-row items-between">
            <h2>{expense.name}</h2>
            <h2>{expense.cost}</h2>
        </div>
    );
} 

interface IExpenseInput{
    expenseName : string
    setName : Dispatch<SetStateAction<string>>

    cost : number
    setCost : Dispatch<SetStateAction<number>>

    createMethod : () => void
}

const ExpenseInput : FC<IExpenseInput> = ({
    expenseName,
    setName,
    cost,
    setCost,
    createMethod
}) => {
    return(
        <div className="grid grid-cols-12 gap-2 w-full">
            <input className="col-span-8 border p-1 rounded-md border-black" 
                type="text"  
                placeholder="Enter name of expense"
                value={expenseName} 
                onChange={(e) => setName(e.target.value)}
            />

            <input className="col-span-2 rounded-md p-1 border border-black" 
                type="number" 
                value={cost} 
                onChange={e => setCost(parseInt(e.target.value))}
            />

            <input className="col-span-2 rounded-md bg-white p-2 border border-black" 
                type="button" 
                value="submit" 
                onClick={createMethod}
            />
        </div>
    )
}

export default ExpenseList;