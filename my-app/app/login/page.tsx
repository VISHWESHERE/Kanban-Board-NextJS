'use client'


import React from 'react'
import Link from 'next/link'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState , useEffect} from 'react';
import {redirect} from 'next/navigation';


type FormData ={
    email: string;
    password: string;

};

const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    redirect('/home');

}

function LoginPage() {
    const [submitStatus, setSubmitStatus] = useState(false);
    const { register, handleSubmit, watch , formState: { errors } } = useForm<FormData>();

    watch('email');
    watch('password');

    useEffect(() => {
            setSubmitStatus(!errors);
        }, [errors]);

    return (
        <div className='max-w-md mx-auto mt-10 p-6 bg-base-200 rounded-lg shadow-lg'>
            <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Email:</label>
                    <br />
                    <input {...register('email',{required: "Email is required",pattern:/^[^\s@]+@[^\s@]+\.[^\s@]+$/})} type="email" placeholder='enter your mail' />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
                <br />
                <div>
                    <label>Password</label>
                    <br />
                    <input {...register('password',{required: "password is required",minLength:6})} type="password" placeholder='enter new password' />
                    {errors.password && <p>{errors.password.message}</p>}
                </div>
                <br />
                <div>
                    <button type="submit" className='btn' disabled={submitStatus}>Login</button>
                </div>
            </form>

    
            <p className="text-center mt-6">
                Don't have an account? <a href="/sign-up" className="link link-primary">Sign up</a>
            </p>
        </div>
    )
}

export default LoginPage