import { createSlice } from '@reduxjs/toolkit';
import {AuthorizationStatus, NameSpace} from '../../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: '',
};

export const userProcess = createSlice({
  name: NameSpace.user,
  initialState,
  reducers: {
    requireAuthorization: (state, action) => {
      state.authorizationStatus = action.payload;
    },
    getUserLogin: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {requireAuthorization, getUserLogin} = userProcess.actions;
