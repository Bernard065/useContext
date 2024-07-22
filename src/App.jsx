import React, { useContext } from 'react'
import Login from './components/Login'
import { AuthContext } from './components/AuthProvider'

const App = () => {
  const {user} = useContext(AuthContext)
  return (
    <div>
      {user ? <Home /> : <Login />}
    </div>
  )
}

export default App