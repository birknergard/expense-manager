import axios from "axios";
import { Expense, IncomeSource } from "../interfaces/Models";

const ManagerService = (() => {

    const BASE_URL = "http://localhost:5000/"

    const getExpenses = async() : Promise<Expense[]> => {
        const response = await axios.get(`${BASE_URL}/Expense`);
        return response.data;
    } 

    const addExpense = async(newExpense : Expense) => {
        
    }

    const getIncome = async() : Promise<IncomeSource[]> => {
        const response = await axios.get(`${BASE_URL}/Source`);
        return response.data;
    }
    
    return(
        getExpenses
    );
    
})()