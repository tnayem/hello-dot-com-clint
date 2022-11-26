import React from 'react';
import AddProduct from '../../AddProduct/AddProduct';
import Catagorys from '../../Catagorys/Catagorys';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Catagorys></Catagorys>
        </div>
    );
};

export default Home;