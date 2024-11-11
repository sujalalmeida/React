import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';

function App() {
  const [budget, setBudget] = useState(0); 
  const [expenses, setExpenses] = useState([]);

  return (
    <div>
      <h1>Expense Tracker</h1>

\      <ExpenseForm 
        budget={budget} 
        setBudget={setBudget} 
        expenses={expenses} 
        setExpenses={setExpenses} 
      />

      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
