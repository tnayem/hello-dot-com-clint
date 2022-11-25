import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SingleSamsung from './SingleSamsung';

const Samsung = () => {
    const url = 'http://localhost:5000/phones?brand=samsung'
    const { data: samsungPhones = [] } = useQuery({
        queryKey: ['samsungPhones'],
        queryFn: () => fetch(url)
            .then(res => res.json())
    })
    return (
        <div>
            <h2 className='text-3xl text-center my-12'>Chose Your Best Phone From Samsung Gallery</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
                {
                    samsungPhones?.map(samsungPhone => <SingleSamsung
                        key={samsungPhone._id}
                        samsungPhone={samsungPhone}
                    ></SingleSamsung>)
                }
            </div>
        </div>
    );
};

export default Samsung;