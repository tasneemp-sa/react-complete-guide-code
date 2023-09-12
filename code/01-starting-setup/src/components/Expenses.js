import ExpenseItem from "./ExpenseItem";
import './Expenses.css'

function Expenses(props) {
  return (
    <div className="expenses">
      {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expenseDate={expense.date}
          expenseTitle={expense.title}
          expenseAmount={expense.amount}
        />
      ))}
    </div>
  );
}

export default Expenses;
