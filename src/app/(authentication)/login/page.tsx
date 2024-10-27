'use client';

import {useState} from 'react';
import Title from "@/app/(authentication)/components/Title";
import LoginForm from "@/app/(authentication)/login/components/LoginForm";
import ResetPasswordForm from "@/app/(authentication)/login/components/ResetPasswordForm";



export default function Page() {
    const [isLoginForm, setIsLoginForm] = useState(true);

    const toggleForm = () => {
        setIsLoginForm(prevIsLoginForm => !prevIsLoginForm);
    };

    return (
        <section className="container flex justify-center items-center h-dvh">
            <Title/>
            {isLoginForm
                ? <LoginForm toggleForm={() => toggleForm()}/>
                : <ResetPasswordForm toggleForm={() => toggleForm()}/>
            }
        </section>
    );
}
