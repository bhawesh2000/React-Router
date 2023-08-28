// useParams hook extract param from url
import React from 'react'
import { useParams } from "react-router-dom";

function UserDetail() {
    const param = useParams(); // useParam hook return object(param) which is key value pair of the params from current url
    const userid = param.userID // userID we have specify in route
  return (
    <div>
      Details about user {userid}
    </div>
  )
}

export default UserDetail
