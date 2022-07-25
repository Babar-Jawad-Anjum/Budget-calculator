import './App.css';
import Alert from "./components/Alert";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import { v4 as uuid } from 'uuid';
import { useState,useEffect } from "react";

// const initialExpenses = [
//   {id: uuid(), charge:"Car rent", amount: 2000},
//   {id: uuid(), charge:"cycle rent", amount: 2400},
//   {id: uuid(), charge:"bike rent", amount: 2500}
// ]

const initialExpenses = localStorage.getItem('expenses')? JSON.parse(localStorage.getItem('expenses')): []

function App() {
  // ********************* State Value ********************
  // All expenses
  const[expenses, setExpenses] = useState(initialExpenses);
  // Single expenses
  const[charge, setCharge] = useState('');
  // Single amount
  const[amount, setAmount] = useState('');

  //Alert
  const [alert, setAlert] = useState({show: false});

  //edit
  const [edit, editItem] = useState(false);

  // edit item
  const [id, setId] = useState(0);

  // ********************* useEffect ********************
  useEffect(()=>{
    localStorage.setItem('expenses', JSON.stringify(expenses));
  },[expenses])

  // ********************* Functionality ********************

  //handle charge
  const handleCharge = e =>{
    setCharge(e.target.value);
  }

  //handle amount
  const handleAmount = e =>{
    setAmount(e.target.value);
  }

  //handle alert
  const handleALert = ({type, text}) =>{
    setAlert({show: true, type, text});
    setTimeout(() => {
      setAlert({show: false});
    }, 2000);
  }

  const handleSubmit = e=>{
    e.preventDefault();
    if(charge !== '' && amount > 0)
    {
      if(edit)
      {
        let tempExpense = expenses.map(item=> {
          return (item.id === id? {...item,charge, amount}: item)
        })
        setExpenses(tempExpense);
        editItem(false);
        handleALert({type: 'success', text: 'Item edited'});
      }
      else
      {
        let newExpense = {id: uuid(), charge, amount};
        setExpenses([...expenses, newExpense]);
        handleALert({type: 'success', text: 'Item added'});
      }
      setCharge('');
      setAmount('');
    }
    else
    {
      handleALert({type:'danger', text: `Charge can't be empty or amount must be greater than zero`});
    }
  }

  //hanlde clear
  const clearItems = ()=>{
    setExpenses([]);
    handleALert({type: 'danger', text: ' All items deleted.'})
  }

  //handle delete
  const handleDelete = (id)=>{
    let tempExpenses = expenses.filter(item => item.id !== id);
    setExpenses(tempExpenses);
    handleALert({type: 'danger', text: 'Item deleted'});
  }
  //handle edit
  const handleEdit = (id)=>{
    let expense = expenses.find(item => item.id === id);
    setCharge(expense.charge);
    setAmount(expense.amount);
    editItem(true);
    setId(id);
  }
  

  return (
    <>
    {alert.show && <Alert type={alert.type} text={alert.text} />}
    <div className="app-div my-4 container p-3">
      <h1 className='App mb-4'><span className="app-text">Budget Calculator</span></h1>
      <main>
        <ExpenseForm 
          charge={charge} 
          amount={amount} 
          handleCharge={handleCharge} 
          handleAmount={handleAmount} 
          handleSubmit={handleSubmit}
          edit={edit}
        />
        <ExpenseList expenses={expenses} handleEdit={handleEdit} handleDelete={handleDelete} clearItems={clearItems}/>
      </main>

      <h2>Total Spending: <span className='total'> $ {expenses.reduce((acc, curr)=>{ //acc is total and curr is current value
        return (acc += parseInt(curr.amount));
        },0)}</span>
      </h2>

    </div>
      
    </>
  );
}

export default App;
