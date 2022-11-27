import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider';

const SignUp = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser,updateUserProfile } = useContext(AuthContext)
    const handleSignUp = data => {
        const name = data.name;
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user);
                handleUpdateUserProfile(name)
                toast.success('User Created successfully')
                navigate('/')
            })
            .catch(error => console.log(error))
    }
    const handleUpdateUserProfile=(name)=>{
        const updateName = {
            displayName:name
        }
        updateUserProfile(updateName)
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
                    {/* role section */}
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text">Admin</span>
                            <input {...register("role")} value='admin' type="radio" name="radio-10" className="radio checked:bg-red-500" checked />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text">Seller</span>
                            <input value='seller' type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text">Buyer</span>
                            <input value='buyer' type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
                        </label>
                    </div>
                    {/* submit field */}
                    <input className='btn btn-accent w-full' value='Sign UP' type="submit" />
                </form>
                <div className="divider">OR</div>
                <p>Already Have an Account Please <Link to='/login' className='text-primary'>Login</Link></p>

            </div>
        </div>
    );
};

export default SignUp;