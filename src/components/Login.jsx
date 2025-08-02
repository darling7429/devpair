import React from 'react'
import { useParams } from 'react-router-dom'

const Login = () => {
  const {userid}=useParams()
  console.log(userid)
  
  return (
    <div>Login</div>
  )
}

export default Login