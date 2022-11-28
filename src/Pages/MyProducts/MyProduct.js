import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider';

const MyProduct = ({ myProduct }) => {
    const { brand, productImg, model, location, marketPrice, price, used, date, time, condition, description, email, mobileNumber } = myProduct
    const { user } = useContext(AuthContext)
    const handleAdvertisePhone = (product) => {
        console.log(product);
        const adObj = {
            brand,
            productImg,
            model,
            location,
            marketPrice,
            price,
            used,
            date,
            time,
            email,
            mobileNumber,
            condition,
            description

        }
        fetch('https://hello-dot-com-server.vercel.app/advertised', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(adObj)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast('This Phone Successfully Added Advertise Section')
                }
            })
            .catch(error => console.error(error))
    }
    return (
        <div>
            {/* <div className="card w-96 bg-base-100 shadow-xl">
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
                        <button onClick={() => handleAdvertisePhone(myProduct)} className="btn btn-primary">Advertised</button>
                    </div>
                </div>
            </div> */}
            <div className="card max-w-72 bg-base-100 shadow-xl image-full max-h-60">
                <figure><img src={productImg} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{model}</h2>
                    <div className='flex'>
                        <p><span className='font-semibold'>Market Price:</span> {marketPrice} Tk</p>
                        <p><span className='font-semibold'>Selling Price:</span> {price} Tk</p>
                    </div>
                    <p>Sells Status:</p>
                    <div className="card-actions justify-between">
                        <button className='btn btn-error'>Delate</button>
                        <button onClick={() => handleAdvertisePhone(myProduct)} className="btn btn-primary">Advertised</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProduct;