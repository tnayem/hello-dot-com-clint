import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import BookingSData from './BookingSData';

const BookingAllData = () => {
    const { user } = useContext(AuthContext)
    const url = `https://hello-dot-com-server.vercel.app/booking?email=${user?.email}`
    const { data: bookings = [],refetch } = useQuery({
        queryKey: ['bookings'],
        queryFn: () => fetch(url)
            .then(res => res.json())
    })
    return (
        <div>
            <h2 className='text-2xl ml-3 mb-12'>My Booking</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
                {
                    bookings?.map(booking => <BookingSData
                        key={booking._id}
                        booking={booking}
                        refetch={refetch}
                    ></BookingSData>)
                }
            </div>
        </div>
    );
};

export default BookingAllData;