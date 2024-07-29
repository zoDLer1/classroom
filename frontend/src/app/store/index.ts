import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userReducer } from '@entities/user';

export const rootReducer = combineReducers({
    userReducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: false,
        }),
    });
};

// export type AppStore = typeof store;

// export type RootState = ReturnType<AppStore['getState']>;

// export type AppDispatch = AppStore['dispatch'];
