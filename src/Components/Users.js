import React from 'react'
import UserDetail from './UserDetail'
import { Outlet } from 'react-router-dom'

function Users() {
  return (
    <div>
        <h1>User1</h1>
        <h1>User2</h1>
        <Outlet />
    </div>
    
  )
}

export default Users
