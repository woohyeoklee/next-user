import { User } from '@prisma/client'
import { signIn, signOut } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

interface NavItemProps {
  currentUser?: User | null
  mobile?: boolean
}

const NavItem = ({mobile, currentUser}: NavItemProps) => {
  
  return (
    <ul className={`
      flex
      text-md
      jsutify-center
      w-full
      gap-4
      ${mobile && "flex-col h-full"}
    `}>
      <li className={`
        py-2 text-center border-b-4 cursor-pointer
      `}>
        <Link href={'/admin'}>Admin</Link>
      </li>
      <li className={`
        py-2 text-center border-b-4 cursor-pointer
      `}>
        <Link href={'/user'}>User</Link>
      </li>
      {currentUser ? (
        <li className={`
          py-2 text-center border-b-4 cursor-pointer
        `}>
          <button onClick={() => signOut()}>SignOut</button>
        </li>
      ) : (
        <li className={`
          py-2 text-center border-b-4 cursor-pointer
        `}>
          <button onClick={() => signIn()}>SignIn</button>
      </li>
      )}
    </ul>
  )
}

export default NavItem