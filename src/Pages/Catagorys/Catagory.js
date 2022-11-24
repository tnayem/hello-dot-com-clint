import React from 'react';

const Catagory = ({catagory}) => {
    const {catagoryName,image} = catagory
    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure><img className='w-full' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{catagoryName}</h2>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Catagory;