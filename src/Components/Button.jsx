import React from 'react'

const Button = ({buttonName,handleClick}) => {
  return (
    <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center " onClick={handleClick}>{buttonName}</button>
  )
}

export default Button
