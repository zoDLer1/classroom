import { type FC, type PropsWithChildren } from 'react';

interface IBlockProps {
}

export const Block: FC<PropsWithChildren<IBlockProps>> = ({ children }) => {
    return (
        <div className='bg-white pt-10 pb-5 px-10 rounded-3xl shadow-md flex-vertical min-w-96'>
            { children }
        </div>
    );
};
