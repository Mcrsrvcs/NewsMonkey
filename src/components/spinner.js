import React from 'react'
import loading from './spinner.gif'

const spinner = () => {

    return (
        <div className="text-center">
      <img className="my-3" src={loading} alt="loading" />
      </div>
    )
  }
export default spinner