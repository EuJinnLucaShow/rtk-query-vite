import { configureStore } from '@reduxjs/toolkit'

import { setupListeners } from '@reduxjs/toolkit/query'
import { themoviApi } from './themoviedb'

export const store = configureStore({
  reducer: {
    
    [themoviApi.reducerPath]: themoviApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(themoviApi.middleware),
})

setupListeners(store.dispatch)