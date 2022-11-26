import React from 'react';
import { ToastContainer } from 'react-toastify';
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