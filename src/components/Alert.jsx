import React from 'react'

const Alert = ({type, text}) => {
  return (
    <div className={`mt-3 container alert alert-${type} role="alert`}>
      {text}
    </div>
  )
}

export default Alert
