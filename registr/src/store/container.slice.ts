import { createSlice } from '@reduxjs/toolkit';

interface IInitialState {
  currentPage: string
}

const initialState: IInitialState = {
  currentPage: '',
}

export const containerSlice = createSlice({
  name: 'container',
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload
    },
  },
})

export const containerActions = containerSlice.actions
export const containerReducer = containerSlice.reducer