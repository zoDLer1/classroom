import { type FC } from 'react';
import { GlobalCloseProvider } from './globalCloseProvider';
import { StoreProvider } from './storeProvider';
import { RoutesProvider } from './routerProvider';

export const Providers: FC = () => {
    return (
        <GlobalCloseProvider>
            <StoreProvider>
                <RoutesProvider />
            </StoreProvider>
        </GlobalCloseProvider>
    );
};
