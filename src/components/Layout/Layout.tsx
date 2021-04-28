import React, { useState } from 'react'
import { Toolbar } from '../Navigation/Toolbar/Toolbar';
import { SideDrawer } from '../Navigation/SideDrawer/SideDrawer';

import './Layout.css'

interface IProps {
  children: JSX.Element
}

export const Layout = ({ children }: IProps) => {
  interface ILayout {
    showSideDrawer: boolean
  }

  const [layoutState, setLayoutState] = useState<ILayout>({
    showSideDrawer: true,
  });

  const sideDrawerClosedHandler = () => {
    setLayoutState({
      showSideDrawer: false,
    })
  }

  return (
    <>
      <div>
        <Toolbar />
        <SideDrawer
          open={layoutState.showSideDrawer}
          closed={sideDrawerClosedHandler}
        />
      </div>

      <main className='Content'>
        {children}
      </main>
    </>
  )
}