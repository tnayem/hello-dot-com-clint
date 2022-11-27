import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const SAdvertised = ({advertise}) => {
    const {brand, productImg, model, location, marketPrice, price, used, date, time, condition, description,email,mobileNumber}=advertise
    const {user}=useContext(AuthContext)
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={productImg} alt="Product Image" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{model}</h2>
                    <div className='flex'>
                        <p><span className='font-semibold'>Market Price:</span> {marketPrice} Tk</p>
                        <p><span className='font-semibold'>Selling Price:</span> {price} Tk</p>
                    </div>
                    <div className='flex justify-between'>
                        <p><span className='font-semibold'>Used:</span> {used}</p>
                        <p><span className='font-semibold'>Condition:</span> {condition}</p>
                    </div>
                    <p><span className='font-semibold'>More Info:</span> {description}</p>
                    <p><span className='font-semibold'>Seller Name:</span> {user.displayName}</p>
                    <p><span className='font-semibold'>Location:</span> {location} </p>
                    <div className='flex'>
                        <p><span className='font-semibold'>Uploded:</span> {date} </p>
                        <p><span className='font-semibold'>Time:</span> {time}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SAdvertised;