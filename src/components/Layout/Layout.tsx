import React from 'react'
import './Layout.css'

export const Layout = (props: any) => {
  return (
    <>
      <div>
        Toolbar, Sidedrawer, Backdrop
      </div>

      <main className='Content'>
        {props.children}
      </main>
    </>
  )
}