import React, { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div>
     <button onClick={() => { setCount(count +1)}}>inc</button> 
      <button onClick={() => {setCount(count -1)}}>dec</button> 
      <h1>{count} </h1>
    </div>
  )
}
