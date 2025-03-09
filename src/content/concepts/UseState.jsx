import React, { useState } from 'react';

const UseState = () => {
    const [count, setCount] = useState(0);

    return (
        <div className='text-center'>
            <p className='text-xl mb-2'>Count: {count}</p>
            <p className='text-sm text-gray-600 mb-4'>
                See the count update instantly!
            </p>
            <div className='flex justify-center gap-2'>
                <button
                    onClick={() => setCount((prevCount) => prevCount - 1)}
                    className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600'
                >
                    Decrement
                </button>
                <button
                    onClick={() => setCount((prevCount) => prevCount + 1)}
                    className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
                >
                    Increment
                </button>
                <button
                    onClick={() => setCount(0)}
                    className='bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600'
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default UseState;
