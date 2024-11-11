import React, { useState } from 'react';

function ExpenseList({ expenses }) {
    const [sortBy, setSortBy] = useState('date'); // default sort by date

    // Simple sort function
    const sortExpenses = () => {
        return [...expenses].sort((a, b) => {
            if (sortBy === 'amount') {
                return Number(b.amount) - Number(a.amount);
            }
            if (sortBy === 'category') {
                return a.category.localeCompare(b.category);
            }
            // sort by date
            return new Date(b.date).getTime() - new Date(a.date).getTime();
        });
    };

    return (
        <div>
          <h3>Expense List</h3>
          
          {/*  sort buttons */}
          <div className="sort-buttons">
            <button 
              onClick={() => setSortBy('amount')}
              className={sortBy === 'amount' ? 'active' : ''}
            >
              Sort by Amount
            </button>
            <button 
              onClick={() => setSortBy('category')}
              className={sortBy === 'category' ? 'active' : ''}
            >
              Sort by Category
            </button>
            <button 
              onClick={() => setSortBy('date')}
              className={sortBy === 'date' ? 'active' : ''}
            >
              Sort by Date
            </button>
          </div>
    
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {sortExpenses().map((expense, index) => (
                <tr key={index}>
                  <td>{expense.category}</td>
                  <td>${expense.amount}</td>
                  <td>{expense.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    
}

export default ExpenseList;