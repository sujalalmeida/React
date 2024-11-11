import React, { useState }  from 'react'

function ExpenseForm({ budget, setBudget, expenses, setExpenses }) {
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');


    // this is for calculating the total expenses

    let totalExpenses = 0;
    for (let expense of expenses) {
        totalExpenses += Number(expense.amount);
    }

    const isNearBudget = totalExpenses >= (budget * 0.8) && budget > 0;

    function handleSubmit(e) {
        e.preventDefault();

        const newExpense = {
            amount: amount,
            category: category,
            date: date
        }
    
        setExpenses([...expenses, newExpense]);
    
        // Clear form
        setAmount('');
        setCategory('');
        setDate('');
    }

    return (
        <div>
            <div className='budget'>
                <h2>Enter your budget</h2>
                <input type='text' value={budget} onChange={(e)=>setBudget(e.target.value)} placeholder='Enter Budget'/>
                <p>Expenses: ${ totalExpenses}</p>
                <p>Remaining budget: {budget - totalExpenses}</p>
                
{/*Budget warnign message */}

                {isNearBudget && (
          <p className="warning-message">
            Warning: 80% of the budget has been utilized!
          </p>
        )}

            </div>
            <form onSubmit={handleSubmit}>
                <input type='text' value={category} onChange={(e) => setCategory(e.target.value)} placeholder='Enter Category'/>
                <input type='text' value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Enter Amount'/>
                <input type='text' value={date} onChange={(e) => setDate(e.target.value)} placeholder='Enter Date'/>

                <button type='submit'>Add Expense</button>
            </form>
    </div>
);
}

export default ExpenseForm;