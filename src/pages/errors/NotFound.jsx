import { useNavigate } from 'react-router-dom'

import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

export default function NotFound() {
  const navigate = useNavigate()
  return (
    <>
      <Header />
      <h1>Not found!!!</h1>
      <Footer />
    </>
  )
}
