import React from "react";
import "./style.css";

const ExpenseItem = ({ id, title, price, date, getId }) => {
  const year = date.getFullYear();
  const month = date.toLocaleString("en-US", { month: "short" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });

  const deleteBtnHandler = () => {
    getId(id, "delete");
  };
  const editBtnHandler = () => {
    getId(id, "edit");
  };

  return (
    <li className="expense-item">
      <div className="date">
        <p className="month">{month}</p>
        <p className="year">{year}</p>
        <p className="day">{day}</p>
      </div>
      <h3 className="title">
        {title} &nbsp; &nbsp; $ {price}
      </h3>
      <div className="actions">
        <button className="btn edit-btn" onClick={editBtnHandler}>
          Edit
        </button>
        <button className="btn delete-btn" onClick={deleteBtnHandler}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;
