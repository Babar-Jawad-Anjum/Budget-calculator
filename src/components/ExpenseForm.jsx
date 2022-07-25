import React from 'react'
import {MdSend} from 'react-icons/md'

const ExpenseForm = ({charge, amount, handleAmount, handleCharge, handleSubmit, edit}) => {
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row form-center">
          <div className="col-md-6 my-2 form-group">
            <label htmlFor="expense">Charge</label>
            <input 
              type="text" 
              className='form-control' 
              id='charge' 
              name='charge'
              placeholder='e.g rent'
              value={charge}
              onChange={handleCharge}
            />
          </div>
          <div className="col-md-6 my-2 form-group">
            <label htmlFor="amount">Amount</label>
            <input 
              type="text" 
              className='form-control' 
              id='amount' 
              name='amount'
              placeholder='e.g 1000'
              value={amount}
              onChange={handleAmount}
            />
          </div>
        </div>
        <button type='submit' className='btn btn-sm btn-primary my-2'>{edit? 'Edit':'Submit'} <MdSend className='btn-icon'/> </button>
      </form>
    </div>
  )
}

export default ExpenseForm
