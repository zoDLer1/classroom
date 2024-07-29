import type { MutableRefObject, ReactNode } from 'react';

export type WithIcon<T> = { icon?: ReactNode } & T;

export interface AutoCloseItem {
    id: string;
    stopItem: MutableRefObject<HTMLElement | undefined>;
    close: () => void;

}

export interface AddAutoCloseFunction {
    (item: AutoCloseItem): void;
}

export interface RemoveAutoCloseFunction {
    (id: string): void;
}
