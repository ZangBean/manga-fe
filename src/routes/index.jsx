import { Route } from 'react-router-dom'

import ReaderRoutes from '@/routes/configs/reader.routes'
// import AuthorRoutes from '@/routes/configs/uploader.routes'
// import AdminRoutes from '@/routes/configs/admin.routes'
import NotFound from '@/pages/errors/NotFound'

export default (
  <>
    {ReaderRoutes}
    {/* {AuthorRoutes}
    {AdminRoutes} */}
    <Route path='*' element={<NotFound />} />
  </>
)
