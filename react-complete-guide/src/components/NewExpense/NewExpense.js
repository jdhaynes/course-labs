import React from "react";

import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
    const onSaveExpenseFormHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        props.onAddExpense(expenseData);
    };

    return (
        <div className="new-expense">
            <ExpenseForm onAddExpense={onSaveExpenseFormHandler}/>
        </div>
    );
};

export default NewExpense;