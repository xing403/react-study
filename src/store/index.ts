import { configureStore } from '@reduxjs/toolkit'
import userReducer from './modules/userSlice'
// 创建store 包括项目中所有的reducer
const store = configureStore({
  reducer: {
    user: userReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export default store
