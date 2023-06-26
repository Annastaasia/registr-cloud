import { createSlice } from '@reduxjs/toolkit'

const initialState: IInitialState = {
  isModalOpen: false,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setIsModalOpen: (state, action) => {
      state.isModalOpen = action.payload
    },
  },
})

export const modalActions = modalSlice.actions
export const modalReducer = modalSlice.reducer