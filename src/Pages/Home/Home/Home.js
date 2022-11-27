import React from 'react';
import Advertised from '../../Advertised/Advertised';
import Catagorys from '../../Catagorys/Catagorys';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Catagorys></Catagorys>
            <Advertised></Advertised>
            <div>
                <div class="flex items-center">
                    <img class="w-20 h-20 rounded-full mr-4" src={'https://imageio.forbes.com/specials-images/imageserve/643757808/0x0.jpg?format=jpg&width=1200'} alt="Avatar of Jonathan Reinink"/>
                        <div class="text-sm">
                            <p class="text-gray-900 leading-none">Jonathan Reinink</p>
                            <p class="text-gray-600">Aug 18</p>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Home;