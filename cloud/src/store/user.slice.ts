import { createSlice } from '@reduxjs/toolkit';

const initialState: IUser = {
  phone: localStorage.getItem('phone') || '',
  email: localStorage.getItem('email') || '',
  nickname: localStorage.getItem('nickname') || '',
  name: localStorage.getItem('name') || '',
  surname: localStorage.getItem('surname') || '',
  sex: localStorage.getItem('sex') || '',
  advantages: JSON.parse(localStorage.getItem('advantages') || '[]'),
  checkboxGroup: JSON.parse(
    localStorage.getItem('checkboxGroup') || '[false, false, false]'
  ),
  radioGroup: JSON.parse(
    localStorage.getItem('radioGroup') || '[false, false, false]'
  ),
  about: localStorage.getItem('about') || '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setPhone: (state, action) => {
      state.phone = action.payload
      localStorage.setItem('phone', action.payload)
    },
    setEmail: (state, action) => {
      state.email = action.payload
      localStorage.setItem('email', action.payload)
    },
    setNickname: (state, action) => {
      state.nickname = action.payload
      localStorage.setItem('nickname', action.payload)
    },
    setName: (state, action) => {
      state.name = action.payload
      localStorage.setItem('name', action.payload)
    },
    setSurname: (state, action) => {
      state.surname = action.payload
      localStorage.setItem('surname', action.payload)
    },
    setSex: (state, action) => {
      state.sex = action.payload
      localStorage.setItem('sex', action.payload)
    },
    setAdvantages: (state, action) => {
      state.advantages = action.payload
      localStorage.setItem('advantages', JSON.stringify(action.payload))
    },
    setCheckboxGroup: (state, action) => {
      state.checkboxGroup = action.payload
      localStorage.setItem('checkboxGroup', JSON.stringify(action.payload))
    },
    setRadioGroup: (state, action) => {
      state.radioGroup = action.payload
      localStorage.setItem('radioGroup', JSON.stringify(action.payload))
    },
    setAbout: (state, action) => {
      state.about = action.payload
      localStorage.setItem('about', action.payload)
    },
  },
})

export const userActions = userSlice.actions
export const userReducer = userSlice.reducer