import React, { FC } from "react";

interface IOverview {
  income: number
  expenses: number
}

const Overview: FC<IOverview> = ({
  income,
  expenses
}) => {
  return (
    <section className="flex flex-col w-full col-span-12 justify-self-center rounded-xl 
                        items-center p-5 bg-gray-200 gap-5">
      <h2 className="text-4xl text-center">{income - expenses}</h2>
      <div className="flex flex-row w-1/3 items-center justify-center gap-5">
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

interface IField {
  title: string
  symbol: string
  color: string
  field: number
}

const Field: FC<IField> = ({
  title,
  symbol,
  color,
  field
}) => {

  return (
    <div className="flex flex-col w-full p-3 border border-black rounded-lg ">
      <h2 className="text-center">{title}</h2>
      <h2 className={`text-center text-xl text-${color}`}>{`${symbol} ${field}`}</h2>
    </div>
  )
}
export default Overview;
