import React from 'react';
import { Link } from 'react-router-dom';

const Catagory = ({catagory}) => {
    const {catagoryName,image,brand} = catagory
    return (
        <div className="card w-80 bg-base-100 shadow-xl image-full mx-auto">
            <figure><img className='w-full' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{catagoryName}</h2>
                <div className="card-actions justify-end">
                    <Link to={`/${brand}`}> <button className="btn btn-primary">View Phone</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Catagory;