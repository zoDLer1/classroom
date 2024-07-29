import { useState, type MouseEvent } from 'react';
import type { AddAutoCloseFunction, AutoCloseItem, RemoveAutoCloseFunction } from '../types';

export const useGlobalAutoClose = () => {
    const [autoCloseArray, setAutoCloseArray] = useState<Array<AutoCloseItem>>([]);

    const add: AddAutoCloseFunction = (item) => {
        setAutoCloseArray((prev) => [...prev, item]);
    };
    const remove: RemoveAutoCloseFunction = (id) => {
        setAutoCloseArray((prev) => prev.filter(({ id: itemId }) => id === itemId));
    };

    const closeAll = (event: MouseEvent<HTMLDivElement>) => {
        for (const { stopItem, close } of autoCloseArray) {
            if (stopItem.current) {
                if (!stopItem.current.contains(event.target as Node)) {
                    close();
                }
            } else {
                close();
            }
        }
    };

    return { add, remove, closeAll, autoCloseArray };
};
