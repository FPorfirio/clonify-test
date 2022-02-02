import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface AuthSliceState {
  user?: string | null;
  authenticated?: boolean;
}

const initialState: AuthSliceState = {
  user: null,
  authenticated: false,
};

export const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<any>) => {
      state.user = action.payload.userInfo.name;
      state.authenticated = true;
    },
    logout: (state, action) => {
      state.user = null;
      state.authenticated = false;
    },
  },
});

export const selectIsAuthenticated = (state: RootState) =>
  state.authentication.authenticated;

export const selectUser = (state: RootState) => state.authentication.user;

export const { login, logout } = authSlice.actions;
