import { configureStore } from '@reduxjs/toolkit'
import breadcrumbSlice from './slices/breadcrumbSlice'

export default configureStore({
  reducer: {
    breadcrumb: breadcrumbSlice,
  },
})