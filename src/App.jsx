import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'

import queryClient from '@/configs/queryClient/queryClient'
import { store } from '@/stores/store'
import RootRouter from '@/routes/Root'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BrowserRouter>
          <RootRouter />
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  )
}

export default React.memo(App)

