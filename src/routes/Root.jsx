import { Routes } from 'react-router-dom'
import { Suspense } from 'react'

import GlobalRoutes from '@/routes/configs/_global'

import LoadingGrid from '@/components/common/LoadingGrid'

const RootRouter = () => {
  return (
    <Suspense fallback={<LoadingGrid />}>
      <Routes>{GlobalRoutes}</Routes>
    </Suspense>
  )
}

export default RootRouter
