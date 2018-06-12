import React from 'react';
import { Link } from 'react-router-dom'

const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => ( 
    <div>
        <Link to={`/edit/${id}`}>
            <h4>{description}</h4>
        </Link>
        <p>{amount} - {createdAt}</p>
    </div>
);

// const mapStateToProps = (state) => {
//     return {
//         expenses: state.expenses
//     };
// };

export default ExpenseListItem;