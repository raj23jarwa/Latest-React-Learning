import React, { useEffect, useState } from 'react'

const Hooks = () => {
    const [value,setValue] =useState(0);
    const handleIncrement =() =>{
        setValue(value+1);
    }
    const handleDecrement =() =>{
        setValue(value-1);
    }

    useEffect(()=>{
          console.log("Hi i will log without click on buttons")
    },[]) 
    useEffect(() => {
       console.log("hi triggered after clicking on btns")
    },[value])
  return (
    <div>
        <h1>Counter is :{value}</h1>
        <button onClick={handleIncrement}>Increment</button> <br/>
        <button onClick={handleDecrement}>Decrement</button>

    </div>
  )
}

export default Hooks