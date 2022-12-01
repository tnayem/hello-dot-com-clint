import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { setAuthToken } from '../../Api/Auth';
import { AuthContext } from '../../Context/AuthProvider';

const SignUp = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const handleSignUp = data => {
        const name = data.name;
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user.email);
                handleUpdateUserProfile(name)
                toast.success('User Created successfully')
                setAuthToken({ email: data.email, displayName: data.name, role: data.role })
                navigate('/')
            })
            .catch(error => console.log(error))
    }
    const handleUpdateUserProfile = (name) => {
        const updateName = {
            displayName: name
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
                    <div>
                        <label className="label">
                            <span className="label-text">Select Role</span>
                        </label>
                        <select {...register("role")} className='input input-bordered w-full mb-3'>
                            <option value="buyer">Buyer</option>
                            <option value="seller">Seller</option>
                        </select>
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