import { Field, Form, Formik } from 'formik';
import { type FC } from 'react';
import { Icon } from '@packages/icons';
import { faKey, faPaperPlane, faEnvelope, faGraduationCap } from '@packages/icons/solid';
import { faUser } from '@packages/icons/regular';
import { Block, Button, Input, Link, Select } from '@shared';
import { registerForminitialValues, roleSelectOptions, userRegisterValidationSchema } from '../config';

interface IRegisterFormProps {
}

export const RegisterForm: FC<IRegisterFormProps> = () => {
    return (
        <Block>
            <h1 className='text-3xl font-medium text-center'>
                Регистарция
            </h1>

            <Formik onSubmit={() => {}} validationSchema={userRegisterValidationSchema} initialValues={registerForminitialValues}>
                {() => {
                    return (
                        <Form autoComplete='off'>

                            <div className='flex-vertical gap-7 mt-10 mb-8'>
                                <Field
                                    name='first_name'
                                    component={Input}
                                    icon={<Icon icon={faUser} size='xl' />}
                                    placeholder='Имя'
                                />

                                <Field
                                    name='last_name'
                                    component={Input}
                                    icon={<Icon icon={faUser} size='xl' />}
                                    placeholder='Фамилия'
                                />

                                <Field
                                    name='email'
                                    component={Input}
                                    icon={<Icon icon={faEnvelope} size='xl' />}
                                    placeholder='E-mail'
                                />

                                <Field
                                    name='role'
                                    component={Select}
                                    icon={<Icon icon={faGraduationCap} size='xl' />}
                                    placeholder='Роль'
                                    options={roleSelectOptions}
                                />

                                <Field
                                    name='password'
                                    component={Input}
                                    icon={<Icon icon={faKey} size='xl' />}
                                    placeholder='Пароль'
                                    options={roleSelectOptions}
                                />

                                <Field
                                    name='repeat_password'
                                    component={Input}
                                    icon={<Icon icon={faKey} size='xl' />}
                                    placeholder='Повторите пароль'
                                    options={roleSelectOptions}
                                />
                            </div>

                            <Button type='submit' icon={<Icon icon={faPaperPlane} />}>
                                Регистарция
                            </Button>

                            <Link to='/login' className='block text-center mt-3'>
                                Уже есть аккаунт?
                            </Link>
                        </Form>
                    );
                }}
            </Formik>
        </Block>
    );
};
