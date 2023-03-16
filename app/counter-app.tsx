'use client'
import React, { use, useState } from 'react'

export default function CounterApp() {
    const [counter,setCounter]=useState(0)
    
    const operation = (numb=1)=>{
setCounter(counter+numb)
 }

  return (<>


    <h1>Counter-App</h1>
    <button onClick={()=>operation(1)}>Increment by 1 </button>
    <button onClick={()=>operation(3)}>Increment by 3</button>
    <button onClick={()=>operation(5)}>Increment by 5</button>
    <br />
    <h3>{counter}</h3>
    <br />
    <button onClick={()=>operation(-1)}>Decrement by 1 </button>
    <button onClick={()=>operation(-3)}>Decrement by 3</button>
    <button onClick={()=>operation(-5)}>Decrement by 5</button>
  </>
  )
}
