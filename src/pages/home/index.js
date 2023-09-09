import React, { useState } from "react";
import ExpenseFilter from "../../components/features/expensefilter";
import ExpenseForm from "../../components/features/expenseform";
import ExpenseList from "../../components/features/expenselist";
import Main from "../../components/ui/main";
import "./style.css";
const expenseListArr = [
  {
    id: 1,
    title: "Expense 1",
    price: 23,
    date: new Date("2022-3-25"),
  },
  {
    id: 2,
    title: "Expense 2",
    price: 34,
    date: new Date("2022-2-3"),
  },
  {
    id: 3,
    title: "Expense 3",
    price: 90,
    date: new Date("2023-7-23"),
  },
];

const Home = () => {
  const [expenses, setexpenses] = useState(expenseListArr);
  const [expenseValue, setExpenseValue] = useState(null);
  const [year, setYear] = useState("2023");

  const getDataHandler = (data, method) => {
    if (method === "add") {
      setexpenses([data, ...expenses]);
    } else if (method === "edit") {
      const editData = expenses.map((editData) => {
        if (editData.id === data.id) {
          return {
            id: data.id,
            title: data.title,
            price: data.price,
            date: new Date(data.date),
          };
        }
        return editData;
      });
      setexpenses(editData);
      setExpenseValue(null);
    }
  };
  const getIdHandler = (id, method) => {
    if (method === "delete") {
      const deleteData = expenses.filter((d) => +d.id !== +id);
      setexpenses(deleteData);
    } else if (method === "edit") {
      const filterData = expenses.filter((d) => +d.id === +id);
      setExpenseValue(filterData[0]);
    }
  };

  const yearChangeHandler = (value) => {
    setYear(value);
  };

  const filterData = expenses.filter((d) => +year === d.date.getFullYear());
  return (
    <Main>
      <ExpenseForm getData={getDataHandler} expenseValue={expenseValue} />
      <ExpenseFilter
        getYear={yearChangeHandler}
        filterExpenses={filterData}
        year={year}
      />

      <ExpenseList expenseList={filterData} getId={getIdHandler} />
    </Main>
  );
};
export default Home;
