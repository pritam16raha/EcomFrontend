
import { Outlet } from 'react-router-dom'
import { PageWrapper } from '../../styles/styles'
import AuthHeader from '../header/AuthHeader'
import Footer from '../footer/Footer'

const AuthLayout = () => {
  return (
    <PageWrapper>
     <AuthHeader />
      <main>
        <Outlet />
      </main>

      <Footer />
    </PageWrapper>
  )
}

export default AuthLayout