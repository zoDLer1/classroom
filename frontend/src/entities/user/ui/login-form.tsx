import { type FC } from 'react';
import { Form, Formik, Field } from 'formik';
import { Icon } from '@packages/icons';
import { faEnvelope, faKey, faPaperPlane } from '@packages/icons/solid';
import { Button, Input, Block, Link, useAppDispatch, setAccessToken } from '@shared';
import { userLoginValidationSchema, loginForminitialValues } from '../config';
import { loginRequest } from '../api';
import { useNavigate } from 'react-router-dom';
import { userActions } from '../model';

interface ILoginFormProps {
}

export const LoginForm: FC<ILoginFormProps> = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    return (
        <Block>
            <h1 className='text-3xl font-medium text-center'>
                Вход
            </h1>

            <Formik
                onSubmit={(values, { setErrors, setSubmitting }) => {
                    setSubmitting(true);
                    loginRequest(values)
                        .then((response) => {
                            dispatch(userActions.auth(response.data.user));
                            setAccessToken(response.data.tokens.access);
                            navigate('/classes');
                        })
                        .catch((response) => {
                            const errors = response.response.data;
                            setErrors(errors);
                        })
                        .finally(() => {
                            setSubmitting(false);
                        });
                }}
                validationSchema={userLoginValidationSchema}
                initialValues={loginForminitialValues}
            >
                {({ isSubmitting }) => {
                    return (
                        <Form autoComplete='off'>

                            <div className='flex-vertical gap-8 mt-10 mb-10'>
                                <Field
                                    name='email'
                                    disabled={isSubmitting}
                                    component={Input}
                                    icon={<Icon icon={faEnvelope} size='xl' />}
                                    placeholder='E-mail'
                                />

                                <Field
                                    disabled={isSubmitting}
                                    name='password'
                                    component={Input}
                                    icon={<Icon icon={faKey} size='xl' />}
                                    placeholder='Пароль'
                                    type='password'
                                />
                            </div>

                            <Button isLoading={isSubmitting} type='submit' icon={<Icon icon={faPaperPlane} />}>
                                Войти
                            </Button>

                            <Link to='/register' className='block text-center mt-3'>
                                Нет аккаунта?
                            </Link>

                        </Form>

                    );
                }}

            </Formik>
        </Block>
    );
};
