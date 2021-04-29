import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export const NavLink = ({ children, href }) => {
  const child = React.Children.only(children)
  const router = useRouter()

  return (
    <Link href={href}>
      {React.cloneElement(child, {
        'aria-current': router.pathname === href ? 'page' : null
      })}
    </Link>
  )
}
