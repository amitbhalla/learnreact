import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [enteredTitle, setEneterdTitle] = useState("");
    const [enteredAmount, setEneterdAmount] = useState("");
    const [enteredDate, setEneterdDate] = useState("");

    const titleChangeHandler = (event) => {
        setEneterdTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
        setEneterdAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setEneterdDate(event.target.value);
    };
    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData);
        setEneterdTitle("");
        setEneterdAmount("");
        setEneterdDate("");

    };


    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title: </label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount: </label>
                    <input type="number" min="1" step="1" value={enteredAmount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date: </label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Close</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;