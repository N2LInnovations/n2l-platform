'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const ActiveLink = ({ children, ...rest }) => {
  const { href } = rest
  const pathName = usePathname()

  const isActive = pathName === href
  return (
    <Link legacyBehavior {...rest} className={isActive ? 'active' : ''}>
      {children}
    </Link>
  )
}

export default ActiveLink
