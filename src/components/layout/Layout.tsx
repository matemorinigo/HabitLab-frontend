import React from 'react'
import { RouterProvider } from 'react-router'
import { ROUTER } from './Router'

const Layout = () => {
  return (
    <RouterProvider router={ROUTER}/>
  )
}

export default Layout