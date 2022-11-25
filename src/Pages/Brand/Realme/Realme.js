import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SRealme from './SRealme';

const Realme = () => {
    const url = 'http://localhost:5000/phones?brand=realme'
    const { data: realmePhones = [] } = useQuery({
        queryKey: ['realmePhones'],
        queryFn: () => fetch(url)
            .then(res => res.json())
    })
    return (
        <div>
            <h2>Chose Your Best Phone From Realme Gallery</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
                {
                    realmePhones?.map(realmePhone=><SRealme
                    key={realmePhone._id}
                    realmePhone={realmePhone}
                    ></SRealme>)
                }
            </div>
        </div>
    );
};

export default Realme;