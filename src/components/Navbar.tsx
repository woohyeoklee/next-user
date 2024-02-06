'use client'
import Link from 'next/link'
import React from 'react'
import NavItem from './NavItem'
import { User } from '@prisma/client'

interface NavbarProps {
  currentUser?: User | null
}

const Navbar = ({currentUser}: NavbarProps) => {
    const [menu, setMenu] = React.useState(false)
    const handleMenu = () => {
      setMenu(!menu)
    }

  return (
    <nav className={
      `relative
      z-10
      w-full
      text-white
      bg-black`
    }>
      <div className={`
        flex
        itmems-center
        justify-between
        mx-5
        sm:mx-10
        lg:mx-20
      `}>
        {/* logo */}
          <div className={`
            flex
            items-center
            text-2xl
            h-14
          `}>
            <Link href={"/"}>Logo</Link>
          </div>
          {/* menu */}
          <div className={`
            text-2xl 
            sm:hidden
            self-center`
          }>

            {(menu === false) ? (
            <button onClick={handleMenu}>+</button>
            ) : (
            <button onClick={handleMenu}>-</button>
            )}
          </div>
          {/* nav lg screen */}
          <div className='hidden sm:block'>
            <NavItem currentUser={currentUser} />
          </div>
      </div>
      <div className='block sm:hidden'>
        {(menu === false) ? null : <NavItem mobile currentUser={currentUser}/>}
      </div>
  </nav>
  ) 
}

export default Navbar