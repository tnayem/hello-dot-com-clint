import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const SRealme = ({ realmePhone }) => {
    const { brand, productImg, model, location, marketPrice, price, used,seller,date,time} = realmePhone;
    const{setPhoneData}=useContext(AuthContext)
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={productImg} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                <h2 className="card-title">{model}</h2>
                    <h4 className='text-xl'>Market Price: {marketPrice} Tk</h4>
                    <h4 className='text-xl'>Selling Price: {price} Tk</h4>
                    <p>Used: {used}</p>
                    <p>Seller Name:{seller}</p>
                    <p>{location} </p>
                    <div className='flex justify-between'>
                        <p>Date:{date}</p>
                        <p className='ml-6'>Time:{time}</p>
                    </div>
                    <div className="card-actions">
                    <label  onClick={()=>setPhoneData(realmePhone)} htmlFor="buyNow-modal" className="btn btn-primary">Book Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SRealme;