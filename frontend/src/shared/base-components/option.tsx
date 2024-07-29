import { FC } from 'react';

export interface IOption {
    id: number;
    name: string;
    onSelect: (optionId: number) => void;
}

export const Option: FC<IOption> = ({ id, name, onSelect }) => {
    return (
        <div
            onClick={() => onSelect(id)}
            key={id}
            className='text-lg border-b-2 border-light-200 px-6 py-1 cursor-pointer hover:bg-dark-10 last:border-none'
        >
            {name}
        </div>
    );
};
