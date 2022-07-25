import React from 'react'
import {MdEdit, MdDelete} from 'react-icons/md'

const ExpenseItem = ({expense, handleEdit, handleDelete}) => {
  
  const {id, charge, amount} = expense

  return (
        <div className="row m-0 p-1 my-2 item-expense">
          <div className="col-md-4 p-0 single-item">
          {charge}
          </div>
          <div className="col-md-4 p-0 single-item">
          ${amount}
          </div>
          <div className="col-md-4 p-0 single-item">
          <button className="edit-btn btn btn-sm btn-warning m-1" aria-label="edit button" onClick={()=>handleEdit(id)}> <MdEdit/> </button>
            <button className="clear-btn btn btn-sm btn-danger m-1" aria-label="delete button" onClick={()=>handleDelete(id)}> <MdDelete/> </button>
          </div>
        </div>  
  )
}

export default ExpenseItem
