import React from 'react';
import Advertised from '../../Advertised/Advertised';
import Catagorys from '../../Catagorys/Catagorys';
import OurPolicy from '../../OurPolicy/OurPolicy';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Catagorys></Catagorys>
            <Advertised></Advertised>
            <OurPolicy></OurPolicy>
        </div>
    );
};

export default Home;