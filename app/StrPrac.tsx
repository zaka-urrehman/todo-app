'use client'
import React, { useState } from 'react'



export default function StrPrac () {


  const [val,setVal]= useState('Hello world')
  const onChangeHandler =(e:any)=>{
    console.log("e is",e.target.value)
  
   setVal(e.target.value)
  }

  return (
<>
  <h1>Use State Hook Practice</h1>
  <input type="text" value={val}   onChange={onChangeHandler}/>
  <br />
  length of the value is: {val.length}

</>
  )
}
