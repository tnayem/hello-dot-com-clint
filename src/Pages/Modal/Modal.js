import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const Modal = () => {
    const{phoneData}=useContext(AuthContext)
    return (
        <>
            <input type="checkbox" id="buyNow-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="buyNow-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{phoneData.model}</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                </div>
            </div>
        </>
    );
};

export default Modal;