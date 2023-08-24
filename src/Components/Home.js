import React from 'react'
import { useNavigate } from 'react-router-dom'  //to navigate programmatically we use useNavigate hook

function Home() {
  const navigate = useNavigate() // useNavigate hook return a function which is navigate here
  return (
    <>
    <div>Home Page</div>
    <button onClick={()=>navigate('Order-Summary')}>Place Order</button> {/* navigate fn take path to which it navigate */}
    </>
  )
}

export default Home
