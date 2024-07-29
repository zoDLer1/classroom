import { type FC } from 'react';
import { Providers } from '../providers';
import '../styles/index.css';

interface IAppProps {

}

export const App: FC<IAppProps> = () => {
    return (
        <Providers />
    );
};
