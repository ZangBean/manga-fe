import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'
import { ROUTER_PATH } from '@/constants/routers'
import AccessDenied from '@/pages/errors/AccessDenied'

export default function RoleGuard({ allowedRoles }) {
  const { user, isAuthenticated, isLoading } = useAuth()
  const location = useLocation()

  if (isLoading) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        Đang kiểm tra quyền...
      </div>
    )
  }

  if (!isAuthenticated || !user) {
    return (
      <Navigate
        to={ROUTER_PATH.LOGIN_PAGE.PATH}
        state={{ from: location }}
        replace
      />
    )
  }

  if (!allowedRoles.includes(user.role)) {
    return <AccessDenied />
  }

  return <Outlet />
}
