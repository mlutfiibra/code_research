import React from 'react';
import { connect } from 'react-redux';

const ExpenseListItem = ({description, amount, createdAt}) => ( 
    <div>
        <h4>{description}</h4>
        <p>{amount} - {createdAt}</p>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses,
        filters: state.filters
    };
};

export default ExpenseListItem;