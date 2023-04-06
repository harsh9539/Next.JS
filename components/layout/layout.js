import React from 'react'
import MainHeader from './main-header'

const Layout = ({children}) => {
  return (
    <div>
      <MainHeader/>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout
