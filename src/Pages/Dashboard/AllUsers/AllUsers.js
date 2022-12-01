import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const AllUsers = () => {
    const url = 'https://hello-dot-com-server.vercel.app/allUsers'
    const { data: allUsersInfo = [],refetch } = useQuery({
        queryKey: ['allUsersInfo'],
        queryFn: () => fetch(url)
            .then(res => res.json())
    })
    const handleDelate = id=>{
        const proceed = window.confirm('Are you sure you want to Delate user')
        if(proceed){
            fetch(`https://hello-dot-com-server.vercel.app/allUsers/${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.acknowledged){
                    console.log(data);
                    toast("User Delate Successfull")
                    refetch()
                }
            })
        }
       console.log(id);
    }
    return (
        <div>
            <h1 className='text-4xl ml-3'>All Users</h1>
            <table className="table w-full">
                <thead>
                    <tr></tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Position</th>
                    <th>Role</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {
                        allUsersInfo?.map((alluserInfo, i) => <tr key={alluserInfo._id}>
                            <th>{i + 1}</th>
                            <td>{alluserInfo.displayName}</td>
                            <td>{alluserInfo.email}</td>
                            <td>{alluserInfo.role}</td>
                            <td><button disabled={alluserInfo?.role==='admin'} onClick={()=>handleDelate(alluserInfo._id)} className='btn btn-sm btn-error text-white'>Delete</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllUsers;