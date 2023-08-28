import React from 'react'
import UserDetail from './UserDetail'
import { Outlet , useSearchParams } from 'react-router-dom'

function Users() {

    //to deal with search param react router provides useSearchParams hook behave similiar to useState hook, store value in url
    // in url filter param is use to filter user based on active
    
    const [searchParam , setSearchParam] = useSearchParams()  // using setSearchParam we can add or remove params in url
    const showActiveUser= searchParam.get('filter')==='Active' //  to holds filter parameter in searchParams use get fn 

    //showActiveUser is boolean value which is true when Active User button is clicked

  return (
    <div>
        <h1>User1</h1>
        <h1>User2</h1>
        <Outlet />

        {/* Search Params */}

        <h2>User Page</h2>

        <button onClick={()=>setSearchParam({'filter':'Active'})}>Active User</button>
        <button onClick={()=>setSearchParam({})}>Reset Filter</button>

        {
            showActiveUser ? <h2>Showing Active User</h2> : <h2>Showing All users</h2>
        }
    </div>
    
  )
}

export default Users
