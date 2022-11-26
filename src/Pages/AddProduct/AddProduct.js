import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useContext(AuthContext)
    console.log(user);
    let showDate = new Date();
    let date = showDate.getDay() + '/' + showDate.getMonth() + '/' + showDate.getFullYear()
    let time = showDate.getHours() + ':' + ' ' + showDate.getMinutes()
    const handleAddData = (data) => {
        console.log(data);
        const myProduct = {
            model: data.model,
            marketPrice: data.marketPrice,
            condition: data.condition,
            email: data.email,
            mobileNumber: data.mobileNumber,
            location: data.location,
            brand: data.brand,
            description: data.description,
            price: data.price,
            used: data.used,
            productImg: data.productImg,
            date: data.date,
            time: data.time

        }
        fetch('http://localhost:5000/phones', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(myProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Your Phone info added successfully')
                }
            })
            .catch(error => console.error(error))
    }
    return (
        <div className='w-96 mx-auto p-6'>
            <form onSubmit={handleSubmit(handleAddData)}>
                {/* Product Name */}
                <div className="form-control w-full mb-3">
                    <input {...register("model", {
                        required: 'Name is Required'
                    })} type="text" placeholder="Product Name" className="input input-bordered w-full" />
                    {errors?.model && <p className='text-rose-200'>{errors?.model?.message}</p>}
                </div>
                {/* Market Price */}
                <div className="form-control w-full mb-3">
                    <input {...register("marketPrice", {
                        required: 'Market Price is Required'
                    })} type="text" placeholder="Market Price" className="input input-bordered w-full" />
                    {errors?.marketPrice && <p className='text-rose-200'>{errors?.marketPrice?.message}</p>}
                </div>
                {/* Condition Type */}
                <div>
                    <label className="label">
                        <span className="label-text">Type Product Condition</span>
                    </label>
                    <select {...register("condition")} className='input input-bordered w-full mb-3'>
                        <option value="Excellent">Excellent</option>
                        <option value="Good">Good</option>
                        <option value="Fair">Fair</option>
                    </select>
                </div>
                {/*Email*/}
                <div className="form-control w-full mb-3">
                    <input {...register("email")} type="text" className="input input-bordered w-full" value={user.email} readOnly />
                </div>
                {/* Phone Number */}
                <div className="form-control w-full mb-3">
                    <input {...register("mobileNumber", {
                        required: "Mobile Number is Required"
                    })} type="text" placeholder="Mobile Number" className="input input-bordered w-full" />
                    {errors?.mobileNumber && <p className='text-rose-200'>{errors?.mobileNumber?.message}</p>}
                </div>
                {/* Location */}
                <div className="form-control w-full mb-3">
                    <input {...register("location", {
                        required: "Location is Required"
                    })} type="text" placeholder="Your Location" className="input input-bordered w-full" />
                    {errors?.location && <p className='text-rose-200'>{errors?.location?.message}</p>}
                </div>
                {/* Select Catagory */}
                <div>
                    <label className="label">
                        <span className="label-text">Select Catagory</span>
                    </label>
                    <select {...register("brand")} className='input input-bordered w-full mb-3'>
                        <option value="samsung">Samsung</option>
                        <option value="oppo">Oppo</option>
                        <option value="realme">Realme</option>
                    </select>
                </div>
                {/* Description */}
                <textarea {...register("description", {
                    required: "Description is Required"
                })} className="textarea textarea-bordered w-full" placeholder="Description"></textarea>
                {errors?.description && <p className='text-rose-200'>{errors?.description?.message}</p>}
                {/* Price */}
                <div className="form-control w-full my-3">
                    <input {...register("price", {
                        required: "Selling Price is Required"
                    })} type="text" placeholder="Selling Price" className="input input-bordered w-full" />
                    {errors?.price && <p className='text-rose-200'>{errors?.price?.message}</p>}
                </div>
                {/* Year of purchase */}
                <div className="form-control w-full mb-3">
                    <input {...register("used", {
                        required: "Year Of used is Required"
                    })} type="text" placeholder="Year of used" className="input input-bordered w-full" />
                    {errors?.used && <p className='text-rose-200'>{errors?.used?.message}</p>}
                </div>
                {/* Product Imgage */}
                <div className="form-control w-full mb-3">
                    <input {...register("productImg", {
                        required: "Image URL is Required"
                    })} type="text" placeholder="Image URL" className="input input-bordered w-full" />
                    {errors?.productImg && <p className='text-rose-200'>{errors?.productImg?.message}</p>}
                </div>
                {/* Current Date*/}
                <div className="form-control w-full mb-3">
                    <input {...register("date")} type="text" placeholder="Date" className="input input-bordered w-full" value={date} readOnly />
                </div>
                {/* Current Time */}
                <div className="form-control w-full mb-3">
                    <input {...register("time")} type="text" placeholder="time" className="input input-bordered w-full" value={time} readOnly />
                </div>

                <input className='btn btn-accent w-full text-white' value='Add Phone' type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;