import React from 'react'
import './Layout.css'

export const Layout = ({ children }: any) => {
  return (
    <>
      <div>
        Toolbar, Sidedrawer, Backdrop
      </div>

      <main className='Content'>
        {children}
      </main>
    </>
  )
}