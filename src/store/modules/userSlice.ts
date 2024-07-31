import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '..'

export interface UserSliceState {
  isLogin: boolean
  status: "idle" | "loading" | "failed"
}

const initialState: UserSliceState = {
  isLogin: false,
  status: "idle",
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state: UserSliceState) => {
      state.isLogin = true
    },
    logout: (state: UserSliceState) => {
      state.isLogin = false
    }
  },
})

export const { login, logout } = userSlice.actions
export const useUserStore = (state: RootState) => state.user

export default userSlice.reducer
