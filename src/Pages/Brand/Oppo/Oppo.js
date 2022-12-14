import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SOppo from './SOppo';

const Oppo = () => {
    const url = 'https://hello-dot-com-server.vercel.app/phones?brand=oppo'
    const { data: oppoPhones = [] } = useQuery({
        queryKey: ['oppoPhones'],
        queryFn: () => fetch(url)
            .then(res => res.json())
    })
    return (
        <div>
            <h2 className='text-3xl text-center my-12'>Chose Your Best Phone From Oppo Gallery</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
                {
                    oppoPhones?.map(oppoPhone=><SOppo
                    key={oppoPhone._id}
                    oppoPhone={oppoPhone}
                    ></SOppo>)
                }
            </div>
        </div>
    );
};

export default Oppo;