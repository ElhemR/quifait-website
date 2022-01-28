import React from 'react'
import { Nav, Button } from 'react-bootstrap';
import Link from 'next/link'

export default function Navbar() {
  return (
    <header className='navbar'>
        <div className='navbar__title navbar__item'>Qui fait ? </div>
        <div className='navbar__item'>Login</div>
    </header>
  )
}