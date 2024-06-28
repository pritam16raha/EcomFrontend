import React from 'react'
import { PageWrapper } from '../../styles/styles'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom'

const BaseLayout = () => {
  return (
    <PageWrapper>
      <Header />

      <Sidebar />

          <div>
            <Outlet />
          </div>

      <Footer />
    </PageWrapper>
  )
}

export default BaseLayout