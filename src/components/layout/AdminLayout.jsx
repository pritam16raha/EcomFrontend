import React from 'react'
import { PageWrapper } from '../../styles/styles'
import { Navigate, Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import AdminHeader from '../header/AdminHeader'
import { useMyAuth } from '../../store/Auth'

const AdminLayout = () => {
  
  const { currentUser } = useMyAuth();
  console.log("user data i got:-",currentUser);

  if(currentUser.role != "admin"){
    return <Navigate to="/" />
  }
  
  return (
    <PageWrapper>
      <AdminHeader/>

        <main>
          <Outlet />
        </main>

        <Footer/>

    </PageWrapper>
  )
}

export default AdminLayout