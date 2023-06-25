import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { containerSlice } from './container.slice'
import { modalSlice } from './modal.slice'
import { userSlice } from './user.slice'
import { userApi } from './user.api'

const rootReducer = combineReducers({
  [userApi.reducerPath]: userApi.reducer,
  modal: modalSlice.reducer,
  user: userSlice.reducer,
  container: containerSlice.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>