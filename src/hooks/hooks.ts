import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../store/store';

    // custom dispatch for Redux action
  export const useAppDispatch = () => useDispatch<AppDispatch>();
  
     // custom State from the Store
  export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;