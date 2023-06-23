import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { containerActions } from '../store/container.slice';
import { modalActions } from '../store/modal.slice';
import { userActions } from '../store/user.slice';

const actions = {
  ...modalActions,
  ...userActions,
  ...containerActions,
}

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actions, dispatch)
}
