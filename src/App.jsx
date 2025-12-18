import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import './App.css'

import queryClient from '@/configs/queryClient/queryClient'
import { store } from '@/stores/store'
import RootRouter from '@/routes/RootRoutes'
import ScrollToTop from '@/components/common/ScrollToTop'

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ScrollToTop />
          <RootRouter />
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  )
}

export default React.memo(App)
