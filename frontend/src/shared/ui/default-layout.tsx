import { UserAuthResponse, userActions } from '@entities/user';
import { AxiosResponse } from 'axios';
import { Suspense, type FC } from 'react';
import { Await, Outlet, useLoaderData } from 'react-router-dom';
import { setAccessToken, useAppDispatch } from '@shared';
import { Icon } from '@packages/icons';
import { faSpinner } from '@packages/icons/solid';

interface IDefaultLayoutProps {
}

export const DefaultLayout: FC<IDefaultLayoutProps> = () => {
    const { authData } = useLoaderData() as { authData: AxiosResponse<UserAuthResponse> };
    const dispatch = useAppDispatch();

    return (
        <div className='bg-main-bg bg-cover bg-no-repeat bg-fixed h-screen flex-vertical'>
            <Suspense fallback={(
                <div className='h-screen flex-ic-jc'>
                    <Icon icon={faSpinner} spinPulse={true} size='3x' className='text-primary-400' />
                </div>
            )}
            >
                <Await errorElement={<Outlet />} resolve={authData}>

                    {({ data: { tokens: { access }, user } }: AxiosResponse<UserAuthResponse>) => {
                        // console.log(response);
                        // { data: { tokens: { access }, user } }: AxiosResponse<UserAuthResponse>
                        setAccessToken(access);
                        dispatch(userActions.auth(user));
                        return <Outlet />;
                    }}
                </Await>
            </Suspense>
        </div>
    );
};
