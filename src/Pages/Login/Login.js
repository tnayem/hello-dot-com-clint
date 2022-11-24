import React from 'react';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit } = useForm();

    const handleLogIn = data =>{
        console.log(data);
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-6'>
                <h2 className='text-4xl text-center mb-6'>Login</h2>
                <form onSubmit={handleSubmit(handleLogIn)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register("email")} type="email" placeholder="email" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full mb-6">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register("password")} type="password" placeholder="password" className="input input-bordered w-full" />
                    </div>
                    <input className='btn btn-accent w-full' value='Login' type="submit" />
                </form>
                <p>New to Hello.com <Link to='/signup' className='text-primary'>Create New Account</Link></p>
                <div className="divider">OR</div>
                <input className='btn btn-success w-full' value='Login With Google' type="submit" />
            </div>
        </div>
    );
};

export default Login;