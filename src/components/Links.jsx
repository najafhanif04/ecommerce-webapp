import React from 'react'
import { Link } from 'react-router-dom'

export default function Links({children, href}) {
  return (
    <Link to={href} className={"text-red-500 px-5"}>
      {children}
    </Link>
  )
}
