import React from "react";
import ExpenseItem from "../expenseitem";

const ExpenseList = ({ expenseList, getId }) => {
  const getIdHandler = (id, method) => getId(id, method);

  return (
    <ul className="expense-list">
      {expenseList.map((data) => (
        <ExpenseItem
          date={data.date}
          price={data.price}
          title={data.title}
          id={data.id}
          key={data.id}
          getId={getIdHandler}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
