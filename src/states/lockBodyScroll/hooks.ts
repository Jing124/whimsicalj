import { AppState, useAppDispatch } from '../../app/hooks';
import { lockBodyScroll, unlockBodyScroll } from './lockBodyScrollSlice';
import { useDispatch, useSelector } from 'react-redux';

import { useCallback } from 'react';

export const useIsBodyScrollLocked = (): boolean => {
	return useSelector((state: AppState) => state.lockBodyScroll);
};

export const useLockBodyScroll = () => {
	const dispatch = useAppDispatch();
	return useCallback(() => dispatch(lockBodyScroll()), [dispatch]);
};

export const useUnlockBodyScroll = () => {
	const dispatch = useAppDispatch();
	return useCallback(() => dispatch(unlockBodyScroll()), [dispatch]);
};
