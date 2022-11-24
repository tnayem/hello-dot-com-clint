import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const handleSignUp = data => {
        console.log(data);
        console.log(errors);
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-6'>
                <h2 className='text-4xl text-center mb-6'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    {/* name fild */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input {...register("name", {
                            required: 'name is Required'
                        })} type='text' placeholder="name" className="input input-bordered w-full" />
                        {errors.name && <p className='text-rose-500'>{errors.name.message}</p>}
                    </div>
                    {/* Email fild */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register("email", {
                            required: 'email is required'
                        })} type='email' placeholder="email" className="input input-bordered w-full" />
                        {errors.email && <p className='text-rose-500'>{errors.email.message}</p>}
                    </div>
                    {/* Password fild */}
                    <div className="form-control w-full mb-6">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register("password", {
                            required: 'password is required'
                        })} type="password" placeholder="password" className="input input-bordered w-full" />
                        {errors.password && <p className='text-rose-500'>{errors.password.message}</p>}
                    </div>
                    {/* submit field */}
                    <input className='btn btn-accent w-full' value='Login' type="submit" />
                </form>
                <div className="divider">OR</div>
                <p>Already Have an Account Please <Link to='/login' className='text-primary'>Login</Link></p>

            </div>
        </div>
    );
};

export default SignUp;