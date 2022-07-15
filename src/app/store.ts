import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';

import lockBodyScrollSlice from '../states/lockBodyScroll/lockBodyScrollSlice';

export const store = configureStore({
	reducer: {
		lockBodyScroll: lockBodyScrollSlice,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
