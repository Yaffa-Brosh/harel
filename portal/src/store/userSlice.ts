import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  user: {};
}

export const initialState = {
  user: {},
} as UserState;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserField: (state, { payload }) => {
      const { field, value } = payload;
      state.user[field] = value;
    },
    setUser: (state, { payload }) => {
      state.user = payload;
    },
  },
});

export const { setUserField, setUser } = userSlice.actions;

export const getUser = (state: any) => state.user.user;

export default userSlice.reducer;
