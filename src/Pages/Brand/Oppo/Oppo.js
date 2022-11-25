import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Modal from '../../Modal/Modal';
import SOppo from './SOppo';

const Oppo = () => {
    const url = 'http://localhost:5000/phones?brand=oppo'
    const { data: oppoPhones = [] } = useQuery({
        queryKey: ['oppoPhones'],
        queryFn: () => fetch(url)
            .then(res => res.json())
    })
    return (
        <div>
            <h2 className='text-3xl text-center my-12'>Chose Your Best Phone From Oppo Gallery</h2>
            <div>
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