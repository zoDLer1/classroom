import { useMemo, type FC, type PropsWithChildren } from 'react';
import { GlobalAutoCloseContext, useGlobalAutoClose } from '@shared';

interface IGlobalCloseProviderProps {
}

export const GlobalCloseProvider: FC<PropsWithChildren<IGlobalCloseProviderProps>> = ({ children }) => {
    const { closeAll, remove, add } = useGlobalAutoClose();

    const value = useMemo(() => ({ remove, add }), []);

    return (
        <GlobalAutoCloseContext.Provider value={value}>
            <div onClick={closeAll}>
                { children }
            </div>
        </GlobalAutoCloseContext.Provider>

    );
};
