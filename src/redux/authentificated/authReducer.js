import { createSlice } from '@reduxjs/toolkit';
import { loginUser, registerUser } from './authOperations';

const initialState = {
  userData: null,
  token: null,
  isLoading: false,
  error: null,
  authentificated: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder =>
    builder
      .addCase(registerUser.pending, state => {
        state.isLoading = true;
        state.error = null;
        state.authentificated = false;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.authentificated = true;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(loginUser.pending, state => {
        state.isLoading = true;
        state.error = null;
        state.authentificated = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.authentificated = true;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const authReducer = authSlice.reducer;
