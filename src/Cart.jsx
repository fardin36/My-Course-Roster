import React, { useEffect } from 'react';

const Cart = () => {
    return (
        <div className='w-80 bg-base-100 shadow-xl p-6 rounded-xl'>
            <h6 className='font-bold text-lg text-[#2F80ED] pb-4'>Credit Hour Remaining 7 hr</h6>
            <hr />
            <h1 className='font-bold text-xl text-[#1C1B1B] py-4'>Course Name</h1>
            <ol className='font-normal text-base text-[#1C1B1B99] leading-7 pb-6 pl-4 list-decimal'>
                <li>Introduction to C Programming.</li>
                <li>Introduction to C Programming.</li>
                <li>Introduction to C Programming.</li>
            </ol>
            <hr />
            <p className='font-medium text-base text-[#1C1B1BCC] py-4'>Total Credit Hour: 13</p>
            <hr />
            <p className='font-medium text-base text-[#1C1B1BCC] pt-4'>Total Price: 48000 USD</p>
        </div>
    );
};

export default Cart;