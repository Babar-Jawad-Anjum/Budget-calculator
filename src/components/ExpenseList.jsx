import React from 'react'
import ExpenseItem from './ExpenseItem'
import {MdDelete} from 'react-icons/md'

const ExpenseList = ({expenses, handleDelete, handleEdit, clearItems}) => {

  return (
    <>
      <ul className="list m-0 my-2 p-0">
        {expenses.map((expense)=>{
          return <ExpenseItem key={expense.id} expense={expense} handleDelete={handleDelete} handleEdit={handleEdit}/>
        })}
      </ul>
      {expenses.length > 0 && <button className="clear-btn btn btn-success m-1" onClick={clearItems}>Clear Expenses
       <MdDelete className='btn-icon'/>
      </button>}
    </>
  )
}

export default ExpenseList
