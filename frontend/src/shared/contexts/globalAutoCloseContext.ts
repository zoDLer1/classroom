import { AddAutoCloseFunction, RemoveAutoCloseFunction } from '../types';
import { createContext } from 'react';

export const GlobalAutoCloseContext = createContext<{ add?: AddAutoCloseFunction; remove?: RemoveAutoCloseFunction }>({});
