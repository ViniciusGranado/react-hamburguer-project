import React from 'react'
import { Toolbar } from '../Navigation/Toolbar/Toolbar';

import './Layout.css'

interface IProps {
  children: JSX.Element
}

export const Layout = ({ children }: IProps) => {
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