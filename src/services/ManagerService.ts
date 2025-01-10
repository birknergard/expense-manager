import axios from "axios";
import { Expense, IncomeSource } from "../interfaces/Models";

const ManagerService = (() => {

    const BASE_URL = "http://localhost:5000/api"

    const getAllExpenses = async() : Promise<Expense[]> => {
        try {
            const response = await fetch(`${BASE_URL}/Expense`);

            if(!response.ok){
                throw new Error(`HTTP error. Status: ${response.status}`);
            }

            const data : Expense[] = await response.json();
            
            return data !== null ? data : [];

        } catch (error) {
            console.error('GetAllExpenses: Error fetching data: ', error)
            return [];
        }
    } 

    const getExpense = async(id : number) : Promise<Expense | null> => {
        try {
            const response = await fetch(`${BASE_URL}/Expense/${id}`);

            if(!response.ok){
                throw new Error(`HTTP error. Status: ${response.status}`);
            }

            const data : Expense = await response.json();
            
            return data;

        } catch (error) {
            console.error('GetAllExpenses: Error fetching data: ', error)
            return null;
        }
    }

    const postExpense = async(newExpense : Expense) => {
        try {
            const response = await fetch(`${BASE_URL}/Expense`, {
                method: 'POST', 
                headers: {
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify(newExpense),
            });

            if(!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`)
            }

        } catch (error) {
            console.error('Error with POST:', error)
        }
    }

    const deleteExpense = async(id : number) => {
        const response = await axios.delete(`${BASE_URL}/Expense/${id}`);
        return response.data;
    }

    const putExpense = async(id : number, newExpense : Expense) => {
        const response = await axios.put(`${BASE_URL}/Expense/${id}`, newExpense);
        return response.data;
    }

    const getAllIncomes = async() : Promise<IncomeSource[]> => {
        try {
            const response = await fetch(`${BASE_URL}/Income`);

            if(!response.ok){
                throw new Error(`HTTP error. Status: ${response.status}`);
            }

            const data : IncomeSource[] = await response.json();
            
            return data !== null ? data : [];

        } catch (error) {
            console.error('GetAllExpenses: Error fetching data: ', error)
            return [];
        }
    }

    const getIncome = async(id : number) : Promise<IncomeSource | null> => {
        try {
            const response = await fetch(`${BASE_URL}/Income/${id}`);

            if(!response.ok){
                throw new Error(`HTTP error. Status: ${response.status}`);
            }

            const data : IncomeSource = await response.json();
            
            return data;

        } catch (error) {
            console.error('GetAllExpenses: Error fetching data: ', error)
            return null;
        }
    }
    
    const postIncome = async(newIncome : IncomeSource) => {
        try {
            const response = await fetch(`${BASE_URL}/Income`, {
                method: 'POST', 
                headers: {
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify(newIncome),
            });

            if(!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`)
            }

        } catch (error) {
            console.error('Error with POST:', error)
        }
    }

    const deleteIncome = async(id : number) => {
        const response = await axios.delete(`${BASE_URL}/Income/${id}`);
        return response.data;
    }

    const putIncome = async(id : number, newIncome : IncomeSource) => {
        const response = await axios.put(`${BASE_URL}/Expense/${id}`, newIncome);
        return response.data;
    }

    return{
        getAllExpenses,
        getExpense,
        postExpense,
        deleteExpense,
        putExpense,
        
        getAllIncomes,
        getIncome,
        postIncome,
        deleteIncome,
        putIncome
    };
    
})()

export default ManagerService;