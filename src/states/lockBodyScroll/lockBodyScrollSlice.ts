import { createSlice } from '@reduxjs/toolkit';

export type LockBodyScrollState = boolean;

const initialState: LockBodyScrollState = false;

export const lockBodyScrollSlice = createSlice({
	name: 'lockBodyScroll',
	initialState,
	reducers: {
		lockBodyScroll: (state) => {
			document.body.style.overflow = 'hidden';
			state = true;
			return state;
		},
		unlockBodyScroll: (state) => {
			document.body.style.overflow = 'auto';
			state = false;
			return state;
		},
	},
});

export const { lockBodyScroll, unlockBodyScroll } = lockBodyScrollSlice.actions;

export default lockBodyScrollSlice.reducer;
