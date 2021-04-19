import React from 'react'
import { Toolbar } from '../Navigation/Toolbar/Toolbar';

import './Layout.css'

export const Layout = ({ children }: any) => {
  return (
    <>
      <div>
        <Toolbar />
      </div>

      <main className='Content'>
        {children}
      </main>
    </>
  )
}