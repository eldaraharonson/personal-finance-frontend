import React from "react";

const Expense = ({ product, date, amount, business }) => {
  return (
    <ul>
      <li>{product}</li>
      <li>{date}</li>
      <li>{amount}</li>
      <li>{business}</li>
    </ul>
  );
};

export default Expense;
