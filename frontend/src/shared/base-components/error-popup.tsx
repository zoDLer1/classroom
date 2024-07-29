import { type FC } from 'react';

interface IErrorPopupProps {
    text?: string;
    className?: string;
}

export const ErrorPopup: FC<IErrorPopupProps> = ({ text, className }) => {
    return (
        <div className={className}>
            <div className='px-3 py-1 w-48'>
                {text}
            </div>
        </div>
    );
};
