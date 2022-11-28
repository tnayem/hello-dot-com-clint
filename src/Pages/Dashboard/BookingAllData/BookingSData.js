import React from 'react';
import { toast } from 'react-toastify';

const BookingSData = ({ booking }) => {
    console.log(booking);
    const { name, email, model, price, productImg,_id } = booking
    const handleDelateOrder=id=>{
        const proceed = window.confirm('Are you sure you want to cancel this product')
        if(proceed){
            fetch(`http://localhost:5000/booking/${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.acknowledged){
                    console.log(data);
                    toast("Your ORder Cancelled Successfull")
                }
                
            })
        }
    }
    return (
        <div>
            <div className="card max-w-72 bg-base-100 shadow-xl image-full max-h-60">
                <figure><img src={productImg} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{model}</h2>
                    <p><span className='font-semibold'>Price:</span> {price} Tk</p>
                    <p>Sells Status:</p>
                    <div className="card-actions justify-between">
                        <button onClick={()=>handleDelateOrder(_id)} className='btn btn-error'>Cancel</button>
                        <button className="btn btn-primary">Payment</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingSData;