import routes from '../routes';
import { type FC } from 'react';
import { RouterProvider } from 'react-router-dom';

interface IRoutesProviderProps {
}

export const RoutesProvider: FC<IRoutesProviderProps> = () => {
    return (
        <RouterProvider router={routes} />
    );
};
