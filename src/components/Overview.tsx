import React, { FC } from "react";

interface IOverview{
    income : number
    expenses : number
}

const Overview : FC<IOverview> = ({
    income,
    expenses
}) => {

    return(
        <section className="flex flex-col w-full col-span-12 justify-self-center rounded-xl justify-items-center justify-between p-5 bg-gray-200">
            <h1 className="text-xl text-center">Overview</h1>
            <h2 className="text-2xl text-center">1069</h2>
            <div className="flex flex-row items-center justify-evenly">
                <Field
                    title="Income" 
                    field={income}
                    symbol="+"
                    color="green-500"
                />
                <Field
                    title="Expenses" 
                    field={expenses}
                    symbol="-"
                    color="red-500"
                />
            </div>
        </section>
    )
} 

interface IField{
    title: string
    symbol: string
    color: string
    field: number

}

const Field : FC<IField> = ({
    title, 
    symbol,
    color,
    field
}) => {

    return(
        <div className="flex flex-col w-1/4 p-2 border border-black rounded-lg ">
            <h2 className="text-center">{title}</h2>
            <h2 className={`text-center text-${color}`}>{`${symbol} ${field}`}</h2>
        </div>
    )
}
export default Overview;