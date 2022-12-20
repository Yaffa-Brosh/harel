import { createSlice } from '@reduxjs/toolkit';

interface UsersState {
  users: [];
}

export const initialState = {
  users: [],
} as UsersState;

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, { payload }) => {
      state.users = payload;
    },
  },
});

export const { setUsers } = usersSlice.actions;

export const getUsers = (state: any) => state.users.users;

export default usersSlice.reducer;
