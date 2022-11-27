import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import MyProduct from './MyProduct';

const MyProducts = () => {
    const{user}=useContext(AuthContext)
    const userEmail = user.email
    const url = `http://localhost:5000/myPhones?email=${userEmail}`
    const { data:myProducts = [] } = useQuery({
        queryKey: ['myProducts'],
        queryFn: () => fetch(url)
            .then(res => res.json())
    })
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
            {
                myProducts?.map(myProduct=><MyProduct
                key={myProduct._id}
                myProduct={myProduct}
                ></MyProduct>)
            }
        </div>
    );
};

export default MyProducts;