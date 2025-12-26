import { Route } from 'react-router-dom'

import ReaderRoutes from '@/routes/configs/reader.routes.jsx'
import AdminRoutes from '@/routes/configs/admin.routes.jsx'
import UploaderRoutes from '@/routes/configs/uploader.routes.jsx'

import NotFound from '@/pages/errors/NotFound'
import RoleGuard from '@/routes/guards/RoleGuard'

export default (
  <>
    {ReaderRoutes}

    <Route element={<RoleGuard allowedRoles={['admin']} />}>
      {AdminRoutes}
    </Route>

    <Route element={<RoleGuard allowedRoles={['admin', 'uploader']} />}>
      {UploaderRoutes}
    </Route>

    <Route path='*' element={<NotFound />} />
  </>
)
