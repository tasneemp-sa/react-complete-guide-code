import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [expenseYear, setExpenseYear] = useState("2020");

  let filterInfoText = "2019, 2021 & 2022";
  if (expenseYear === "2019") {
    filterInfoText = "2020, 2021 & 2022";
  } else if (expenseYear === '2021') {
    filterInfoText = "2019, 2020 & 2022";
  } else {
    filterInfoText = "2019, 2020 & 2021";
  }

  const changeYearHandler = (expenseYear) => {
    setExpenseYear(expenseYear);

    console.log(expenseYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onChangeYear={changeYearHandler}
          filteredYear={expenseYear}
        />
        <p>Data for years {filterInfoText} is hidden</p>
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            key={expense.id}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
