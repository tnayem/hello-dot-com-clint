import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {
    
    const { register, handleSubmit } = useForm();
    const {googleSignUp,setError,error,signIn}=useContext(AuthContext);
    const GoogleProvider = new GoogleAuthProvider()
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/'

    const handleLogIn = data =>{
        console.log(data);
        signIn(data.email,data.password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            toast.success('Login Successfully')
            setError('')
            navigate(from,{replace: true});
            
        })
        .catch(error=>{
            console.log(error);
            setError(error.message)
        })
    }
    //Google Sign Up
    const handleGoogleSignUp=()=>{
        googleSignUp(GoogleProvider)
        .then(result=>{
            const user = result.user
            console.log(user);
            toast.success('Google Login Successfully')
            setError('')
            navigate(from,{replace:true})
        })
        .catch(error=>{
            console.log(error)
            setError(error.message)
        })
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
                    {error && <p className='text-red-500'>{error}</p>}
                    <input className='btn btn-accent w-full' value='Login' type="submit" />
                </form>
                <p>New to Hello.com <Link to='/signup' className='text-primary'>Create New Account</Link></p>
                <div className="divider">OR</div>
                <input onClick={handleGoogleSignUp} className='btn btn-success w-full' value='Login With Google' type="submit" />
            </div>
        </div>
    );
};

export default Login;