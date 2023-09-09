import { useEffect, useState } from "react";
import "./style.css";

const ExpenseForm = ({ getData, expenseValue }) => {
  const [expenseData, setExpenseData] = useState({
    title: "",
    price: "",
    date: "",
  });

  useEffect(() => {
    if (expenseValue !== null) {
      const year = expenseValue.date.getFullYear();
      const month = ("0" + (expenseValue.date.getMonth() + 1)).slice(-2);
      const day = expenseValue.date.toLocaleString("en-US", { day: "2-digit" });

      setExpenseData({
        title: expenseValue.title,
        price: expenseValue.price,
        date: `${year}-${month}-${day}`,
      });
    }
  }, [expenseValue]);

  const inputChangeHandler = (e) => {
    setExpenseData({ ...expenseData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const data = {
      ...expenseData,
      id:
        expenseValue !== null
          ? expenseValue.id
          : Math.floor(Math.random() * 1000),
      date: new Date(expenseData.date),
    };

    expenseValue !== null ? getData(data, "edit") : getData(data, "add");

    setExpenseData({
      title: "",
      price: "",
      date: "",
    });
  };
  return (
    <div className="expense-form">
      <h4>Add Expense </h4>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="title">Expense</label>
          <input
            type="text"
            id="expenseTitle"
            placeholder="Add Your Expense"
            name="title"
            value={expenseData.title}
            onChange={inputChangeHandler}
            required
          />
        </div>

        <div>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            placeholder="Expnese Price"
            name="price"
            value={expenseData.price}
            onChange={inputChangeHandler}
            required
          />
        </div>

        <div>
          <label htmlFor="date">Date </label>
          <input
            type="date"
            id="expenseDate"
            name="date"
            value={expenseData.date}
            onChange={inputChangeHandler}
            required
          />
        </div>
        <button className="btn" type="submit">
          {expenseValue === null ? "Add Now" : "Edit Now "}
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
