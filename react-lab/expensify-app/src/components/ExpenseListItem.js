import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses'

const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => ( 
    <div>
        <h4>{description}</h4>
        <p>{amount} - {createdAt}</p>
        <button onClick={(e) => {
            dispatch(removeExpense({id}))
        }}>Remove</button>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    };
};

export default connect(mapStateToProps)(ExpenseListItem);