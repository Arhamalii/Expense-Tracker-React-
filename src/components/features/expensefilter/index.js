import React from "react";
import { Dropdown } from "./style";
import classes from "./style.module.css";

const ExpenseFilter = ({ filterExpenses, getYear, year }) => {
  const yearCahngeHandler = (e) => {
    getYear(e.target.value);
  };

  return (
    <div className={classes["filter-data"]}>
      <h3>Filter</h3>
      <Dropdown
        bg={filterExpenses.length === 0 ? "red" : undefined}
        value={year}
        onChange={yearCahngeHandler}
      >
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </Dropdown>
    </div>
  );
};

export default ExpenseFilter;
