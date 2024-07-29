import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../types';

interface IUserStore {
    data: IUser;
}

const initialState: IUserStore = {
    data: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        auth: (state, action: PayloadAction<IUser>) => {
            state.data = action.payload;
        },
        signout: (state) => {
            // state = initialState;
        },
    },
});

export const userReducer = userSlice.reducer;

export const userActions = userSlice.actions;
