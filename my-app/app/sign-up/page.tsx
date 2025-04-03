'use client'

import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { redirect } from 'next/navigation';

type FormData ={
    email: string;
    password: string;
    confirm_password: string;
};

const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    redirect('/login');
}


function SignupPage() {
    const [submitStatus, setSubmitStatus] = useState(false);
    const { register, handleSubmit, watch , formState: { errors } } = useForm<FormData>();

    const password = watch('password');
    const confirm_password = watch('confirm_password');

    useEffect(() => {
        setSubmitStatus(password === confirm_password);
    }, [password, confirm_password]);
  return (
    <div className='max-w-md mx-auto mt-10 p-6 bg-base-200 rounded-lg shadow-lg'>
            <h1 className="text-2xl font-bold mb-6 text-center">SignUp</h1>
            
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
                    <label>Confirm Password</label>
                    <br />
                    <input {...register('confirm_password',{required: "password is required",minLength:6})} type="password" placeholder='confirm password' />
                    {errors.confirm_password && <p>{errors.confirm_password.message}</p>}
                </div>
                {password !== confirm_password && <p>Passwords do not match</p>}
                <br />
                <div>
                    <button type="submit" className='btn' disabled={!submitStatus}>SignUp</button>
                   
                </div>
            </form>

    </div>
  )
}
export default SignupPage