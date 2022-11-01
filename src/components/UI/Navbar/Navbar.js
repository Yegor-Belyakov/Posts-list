import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context/Context'
import MyButton from '../button/MyButton'

export default function  Navbar () {
  const {setIsAuth} = useContext(AuthContext)
  const logout = () => {
    setIsAuth(false)
    localStorage.removeItem('auth')
  }
  return (
    <div className="navbar">
      <MyButton onClick={logout} >Выйти</MyButton>
        <div className="navbar__links">
          <Link to="/about"> О Сайте</Link>
          <Link to="/posts"> Посты</Link>
        </div>
     </div>
  )
}
