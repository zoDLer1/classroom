import { useEffect, useState, useRef, useId } from 'react';
import { useAutoClose } from './useAutoClose';

export const useOpen = () => {
    const id = useId();
    const stopCloseItem = useRef<HTMLDivElement>();
    const [isOpen, setIsOpen] = useState(false);
    const { add, remove } = useAutoClose();

    useEffect(() => {
        return () => remove(id);
    }, []);

    const open = () => {
        setIsOpen(true);
        add({ id, close, stopItem: stopCloseItem });
    };

    const close = () => {
        setIsOpen(false);
        remove(id);
    };

    const toggle = () => {
        const func = isOpen ? close : open;
        func();
    };

    return { isOpen, stopCloseItem, close, open, toggle };
};
