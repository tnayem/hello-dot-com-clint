import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';

const Catagorys = () => {
    // const[catagorys,setCatagorys] = useState([])
    const {data:catagorys=[]} = useQuery({
        queryKey:['catagorys'],
        queryFn:() => fetch('http://localhost:5000/catagory')
        .then(res=>res.json())
    })
    return (
        <div>
            This is Catagorys
            {catagorys.length}
        </div>
    );
};

export default Catagorys;