import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
    <div className="flex-1">
      <Link href="/" className='btn btn-ghost text-xl'>JIRA</Link>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        <li><Link href="/login">Login</Link></li>
        <li><Link href="/sign-up">Sign up</Link></li>
      </ul>
    </div>
  </div>
  )
}

export default Header