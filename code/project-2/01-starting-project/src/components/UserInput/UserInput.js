import { useState } from "react";

import classes from "./UserInput.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const UserInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim().length === 0) {
      setError({ title: "Invalid Input", message: "Name cannot be blank." });
      return;
    } else if (enteredAge.trim().length === 0 || +enteredAge.trim() < 1) {
      setError({
        title: "Invalid Input",
        message: "Age cannot be blank or less than 1",
      });

      return;
    }
    const userInput = {
      name: enteredName,
      age: enteredAge,
      id: Math.random().toString(),
    };

    props.onAddUser(userInput);
    setEnteredName("");
    setEnteredAge("");
  };

  const inputChangeHandler = (input, value) => {
    if (input === "name") setEnteredName(value);
    else if (input === "age") setEnteredAge(value);
  };

  const closeModalHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClose={closeModalHandler}
        />
      )}
      <Card className={classes.input}>
        <form className={classes.form} onSubmit={submitHandler}>
          <label htmlFor="username">Username </label>
          <input
            id="username"
            type="text"
            value={enteredName}
            onChange={(event) => inputChangeHandler("name", event.target.value)}
          />
          <label htmlFor="age">Age (years) </label>
          <input
            type="number"
            value={enteredAge}
            onChange={(event) => inputChangeHandler("age", event.target.value)}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default UserInput;
