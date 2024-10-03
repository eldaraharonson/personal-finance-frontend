import React from "react";
import Expense from "./Expense";
import Header from "./Header";

function ExpenseList({ expensesData }) {
  const today = new Date();
  const expenses = [
    {
      product: "T-shirt",
      date: today.toLocaleDateString(),
      amount: 20.0,
      business: "Zara",
    },
    {
      product: "Car",
      date: today.toLocaleDateString(),
      amount: 3000.0,
      business: "Toyota",
    },
    {
      product: "Pasta",
      date: today.toLocaleDateString(),
      amount: 10.0,
      business: "Mall",
    },
  ];
  return (
    <div>
      <Header appName="My Finance" userName="Eldar Aharonson" />
      {expenses.map((expense) => (
        <Expense
          key={expense.product}
          date={expense.date}
          product={expense.product}
          amount={expense.amount}
          business={expense.business}
        />
      ))}
    </div>
  );
}

export default ExpenseList;
