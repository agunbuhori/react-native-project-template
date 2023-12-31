import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

interface AuthState {
  token: string;
}

const initialState: AuthState = {
  token: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    logout: state => {
      state.token = '';
    },
  },
});

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;
