import { Routes } from 'react-router-dom'
import { Suspense } from 'react'

import AppRoutes from '@/routes'
import LoadingGrid from '@/components/common/LoadingGrid'

const RootRouter = () => {
  return (
    <Suspense fallback={<LoadingGrid />}>
      <Routes>{AppRoutes}</Routes>
    </Suspense>
  )
}

export default RootRouter
