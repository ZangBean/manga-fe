import { useNavigate } from 'react-router-dom'

import { Footer, Header } from '@/components/layout'

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
