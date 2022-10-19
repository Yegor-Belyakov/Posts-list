import React from 'react'
import { Link } from 'react-router-dom'

export default function () {
  return (
    <div className="navbar">
        <div className="navbar__links">
          <Link to="/about"> О Сайте</Link>
          <Link to="/posts"> Посты</Link>
        </div>
     </div>
  )
}
