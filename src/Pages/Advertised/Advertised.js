import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SAdvertised from './SAdvertised';

const Advertised = () => {
    const url = 'https://hello-dot-com-server.vercel.app/advertised'
    const { data: advertises = [] } = useQuery({
        queryKey: ['advertises'],
        queryFn: () => fetch(url)
            .then(res => res.json())
    })
    return (
        <div>
           <h1 className='text-center text-4xl my-12'>Advertise Section</h1>
           <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
                {
                    advertises?.map(advertise=><SAdvertised
                    key={advertise._id}
                    advertise={advertise}
                    ></SAdvertised>)
                }
           </div>
        </div>
    );
};

export default Advertised;