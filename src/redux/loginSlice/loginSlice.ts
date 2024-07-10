import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoginType {
  value: number;
}

const initialState: LoginType = {
  value: 0,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = loginSlice.actions;

export default loginSlice.reducer;
