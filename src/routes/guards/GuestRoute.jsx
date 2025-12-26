import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'
import { ROUTER_PATH } from '@/constants/routers'

export default function GuestRoute({ children }) {
  const { user, isLoading } = useAuth()
  const location = useLocation()

  if (isLoading) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        Đang tải...
      </div>
    )
  }

  if (user) {
    switch (user.role) {
      case 'admin':
        return <Navigate to={ROUTER_PATH.ADMIN_DASHBOARD_PAGE.PATH} replace />
      case 'uploader':
        return (
          <Navigate to={ROUTER_PATH.UPLOADER_DASHBOARD_PAGE.PATH} replace />
        )
      default:
        return <Navigate to={ROUTER_PATH.HOME_PAGE.PATH} replace />
    }
  }

  return children
}
