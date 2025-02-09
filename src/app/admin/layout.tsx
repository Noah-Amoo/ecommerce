import { Nav, NavLink } from '@/components/Nav'
import React from 'react'

export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>)
 {
  return(
    <>
      <Nav>
        <NavLink href="/admin">Home</NavLink>
        <NavLink href="/admin/products">Products</NavLink>
        <NavLink href="/admin/users">Customers</NavLink>
        <NavLink href="/admin/orders">Sales</NavLink>
      </Nav>
      <div className='container my-6'>
            {children}
      </div>
    </>
  )
}
