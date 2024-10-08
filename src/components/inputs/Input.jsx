import React from 'react'

const Input = ({placeholder, className, htmlFor, value, onChange, type, id}) => {
  return (
    <div>
        <label htmlFor={htmlFor}/>
        <input
        id={id} 
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange} 
        className={`border-[0.18rem] border-brown rounded-inp shadow-bigs placeholder:font-raleway  placeholder:text-regu text-left h-[2.5rem] placeholder:font-semibold pl-4 pt-1 ${className} focus:outline-none focus:border-darklila focus:border-1`}/>
    </div>
  )
}

export default Input
