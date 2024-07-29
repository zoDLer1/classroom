import { useContext } from 'react';
import { GlobalAutoCloseContext } from '../contexts';

export const useAutoClose = () => {
    return useContext(GlobalAutoCloseContext)!;
};
