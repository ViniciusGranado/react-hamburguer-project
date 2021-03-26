import React from 'react'

export const Layout = (props: any) => {
  return (
    <>
      <div>
        Toolbar, Sidedrawer, Backdrop
      </div>

      <main>
        {props.children}
      </main>
    </>
  )
}