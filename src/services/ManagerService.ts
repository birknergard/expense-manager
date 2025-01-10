import axios from "axios";
import { Expense, IncomeSource } from "../interfaces/Models";

const ManagerService = (() => {

    const BASE_URL = "http://localhost:5000/"

    const getExpenses = async() : Promise<Expense[]> => {
        const response = await axios.get(`${BASE_URL}/Expense`);
        return response.data;
    } 

    const postExpense = async(newExpense : Expense) => {
        const response = await axios.post(`${BASE_URL}/Expense`, newExpense); 
        return response.data;
    }

    const deleteExpense = async(id : number) => {
        const response = await axios.delete(`${BASE_URL}/Expense/${id}`);
        return response.data;
    }

    const putExpense = async(id : number, newExpense : Expense) => {
        const response = await axios.put(`${BASE_URL}/Expense/${id}`, newExpense);
        return response.data;
    }

    const getIncome = async() : Promise<IncomeSource[]> => {
        const response = await axios.get(`${BASE_URL}/Income`);
        return response.data;
    }
    
    const postIncome = async(newIncome : IncomeSource) => {
        const response = await axios.post(`${BASE_URL}/Income`, newIncome); 
        return response.data;
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
        getExpenses,
        postExpense,
        deleteExpense,
        putExpense,
        getIncome,
        postIncome,
        deleteIncome,
        putIncome
    };
    
})()