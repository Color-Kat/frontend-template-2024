import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {Input} from "@components/Inputs";
import {BsPerson} from "react-icons/bs";
import {BiLockAlt, BiLockOpenAlt} from "react-icons/bi";
import {FiMail} from "react-icons/fi";
import {LoadingButton} from "@components/Buttons";
import {StandardFilledButton} from "@UI/Buttons";
import {Helmet} from "react-helmet";

export const Register: React.FC = ({}) => {
    const [register, {isLoading}] = [() => {}, {isLoading: false }];

    const [data, setData] = useState({
        email: '',
        name: '',
        password: '',
        password_confirmation: '',
    });

    const [errors, setErrors] = useState<any>({
        errors: {},
        message: ''
    });
    const handleSubmit =  async (e: any) => {
        e.preventDefault();
        setErrors({
            errors: {},
            message: ''
        });

        // const result = await register(data);

        // Handle validator error
        // if ('error' in result)
        //     return 'data' in result.error
        //         ? setErrors((result.error.data as IValidatorErrors))
        //         : false;
    }

    return (
        <div className="flex items-center justify-center w-full h-full py-48">
            <Helmet>
                <title>Регистрация</title>
                <link rel="canonical" href={import.meta.env.VITE_APP_URL + '/register'}/>
            </Helmet>

            <form className="login text-center backdrop-blur-2xl bg-white/10 shadow-2xl shadow-black/10 md:px-16 md:py-20 px-8 py-16 rounded-3xl animate-slide-up">
                <div className="text-3xl font-bold tracking-widest mb-8 animate-slide-up-slow">
                    <h1>Регистрация</h1>
                </div>

                <div className="space-y-3.5">
                    <Input
                        data={data}
                        setData={setData}
                        name="name"
                        placeholder="Имя"
                        Icon={BsPerson}
                        errorMessages={errors?.errors?.name}
                    />

                    <Input
                        data={data}
                        setData={setData}
                        name="email"
                        type="email"
                        placeholder="Email"
                        Icon={FiMail}
                        errorMessages={errors?.errors?.email}

                    />

                    <Input
                        data={data}
                        setData={setData}
                        name="password"
                        type="password"
                        placeholder="Пароль"
                        Icon={BiLockOpenAlt}
                        errorMessages={errors?.errors?.password}
                    />

                    <Input
                        data={data}
                        setData={setData}
                        name="password_confirmation"
                        type="password"
                        placeholder="Повторите пароль"
                        Icon={BiLockAlt}
                        errorMessages={errors?.errors?.password_confirmation}
                    />
                </div>

                <div className="mt-3 text-sm underline text-right text-black">
                    <Link to="/login">
                        Уже зарегистрированы?
                    </Link>
                </div>

                <LoadingButton
                    className="mt-8 w-full"
                    isLoading={isLoading}
                    onClick={handleSubmit}
                    ButtonComponent={StandardFilledButton}
                >
                    Создать аккаунт
                </LoadingButton>
            </form>
        </div>
    );
}