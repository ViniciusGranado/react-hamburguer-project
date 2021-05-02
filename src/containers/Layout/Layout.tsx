import React, { useState } from 'react'
import { Toolbar } from '../../components/Navigation/Toolbar/Toolbar';
import { SideDrawer } from '../../components/Navigation/SideDrawer/SideDrawer';

import './Layout.css'

interface IProps {
  children: JSX.Element
}

export const Layout = ({ children }: IProps) => {
  interface ILayout {
    showSideDrawer: boolean
  }

  const [layoutState, setLayoutState] = useState<ILayout>({
    showSideDrawer: false,
  });

  const sideDrawerClosedHandler = () => {
    setLayoutState({
      showSideDrawer: false,
    })
  }

  const sideDrawerToggleHandler = () => {
    setLayoutState({
      showSideDrawer: !layoutState.showSideDrawer,
    });
  }

  return (
    <>
      <div>
        <Toolbar drawerToggleClicked={sideDrawerToggleHandler}/>
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