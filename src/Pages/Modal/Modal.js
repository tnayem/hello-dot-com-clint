import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Context/AuthProvider';

const Modal = () => {
    const { phoneData, user } = useContext(AuthContext)
    const {register, handleSubmit, formState: { errors } } = useForm()
    const handleModalSubmit = data => {
        data.name = user.displayName
        data.email = user.email
        data.model = phoneData.model
        data.price = phoneData.price
        console.log(data);
    }
    
    return (
        <>
            <input type="checkbox" id="buyNow-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="buyNow-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div>
                        <form onSubmit={handleSubmit(handleModalSubmit)}>
                            {/* display Name */}
                            <div className="form-control w-full mb-3">
                                <input {...register("name")} type="text" Value={user?.displayName} className="input input-bordered w-full" readOnly/>
                            </div>
                            {/* Email Address */}
                            <div className="form-control w-full mb-3">
                                <input {...register("email")} type="email" value={user?.email} readOnly className="input input-bordered w-full" />
                            </div>
                            {/* Product Name */}
                            <div className="form-control w-full mb-3">
                                <input {...register("model")} type="text" value={phoneData?.model} readOnly className="input input-bordered w-full" />
                            </div>
                            {/* Product Price */}
                            <div className="form-control w-full mb-3">
                                <input {...register("price")} type="text" value={phoneData?.price} readOnly className="input input-bordered w-full" />
                            </div>
                            {/* Phone Number */}
                            <div className="form-control w-full mb-3">
                                <input {...register("mobileNumber", {
                                    required: "Phone Number is Required"
                                })} type="text" placeholder='Phone Number' className="input input-bordered w-full" />
                                {errors?.mobileNumber && <p className='text-rose-200'>{errors?.mobileNumber?.message}</p>}
                            </div>
                            {/* Location */}
                            <div className="form-control w-full mb-3">
                                <input placeholder="Meeting Location" {...register("location", {
                                    required: "Location is Required"
                                })} type="text" className="input input-bordered w-full" />
                                {errors?.location && <p className='text-rose-200'>{errors?.location?.message}</p>}
                            </div>
                            <input className='btn btn-accent w-full' value='Submit' type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;