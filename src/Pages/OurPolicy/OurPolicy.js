import React from 'react';

const OurPolicy = () => {
    return (
        <section className='shadow-2xl mt-12'>
            <h2 className='text-center text-4xl pt-24 text-green-500 font-semibold'>Our Policy</h2>
            <div className='py-24 mx-6'>
                <div className='grid lg:grid-cols-4 sm:grid-cols-1'>
                    {/* Cash On Delevery */}
                    <div class="flex items-center">
                        <img class="w-20 h-20 rounded-full mr-4" src={'https://previews.123rf.com/images/latkun/latkun1904/latkun190400185/124003781-payment-by-cash-for-express-delivery-flat-illustration-how-people-deliver-package-and-pay-for-the-de.jpg'} alt="Avatar of Jonathan Reinink" />
                        <div class="text-sm">
                            <h3 class="text-gray-900 leading-none text-2xl">CASH ON DELIVERY</h3>
                            <p class="text-gray-600">Pay cash at your doorstep</p>
                        </div>
                    </div>
                    {/* Delivery */}
                    <div class="flex items-center">
                        <img class="w-20 h-20 rounded-full mr-4" src={'https://www.swiftdelivery.ae/images/n3.png'} alt="Avatar of Jonathan Reinink" />
                        <div class="text-sm">
                            <h3 class="text-gray-900 leading-none text-2xl">DELIVERY</h3>
                            <p class="text-gray-600">All over Bangladesh</p>
                        </div>
                    </div>
                    {/* HAPPY RETURN */}
                    <div class="flex items-center">
                        <img class="w-20 h-20 rounded-full mr-4" src={'https://www.advantageemblem.com/images/return_pic2.jpg'} alt="Avatar of Jonathan Reinink" />
                        <div class="text-sm">
                            <h3 class="text-gray-900 leading-none text-2xl">HAPPY RETURN</h3>
                            <p class="text-gray-600">7 days return facility</p>
                        </div>
                    </div>
                    {/* help Line */}
                    <div class="flex items-center">
                        <img class="w-20 h-20 rounded-full mr-4" src={'https://cdn-icons-png.flaticon.com/512/217/217887.png'} alt="Avatar of Jonathan Reinink" />
                        <div class="text-sm">
                            <h3 class="text-gray-900 leading-none text-2xl">HELP:01732862871</h3>
                            <p class="text-gray-600">7 days a week</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurPolicy;