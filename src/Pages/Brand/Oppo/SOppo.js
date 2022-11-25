import React from 'react';

const SOppo = ({ oppoPhone }) => {
    const { brand, productImg, model, location, marketPrice, price, condition } = oppoPhone
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
                    <p>Condition: {condition}</p>
                    <p>{location} </p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SOppo;