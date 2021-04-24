import React from 'react'
import { Toolbar } from '../Navigation/Toolbar/Toolbar';
import { SideDrawer } from '../Navigation/SideDrawer/SideDrawer';

import './Layout.css'

interface IProps {
  children: JSX.Element
}

export const Layout = ({ children }: IProps) => {
  return (
    <>
      <div>
        <Toolbar />
        <SideDrawer />
      </div>

      <main className='Content'>
        {children}
      </main>
    </>
  )
}