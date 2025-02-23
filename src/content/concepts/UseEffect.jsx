import React, { useState, useEffect } from 'react';

const UseEffect = ({ jsagdj }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count is ${count}`;
    }, [count]);

    return (
        <div className='text-center'>
            <p className='text-xl mb-2'>Count: {count}</p>
            <p className='text-sm text-gray-600 mb-4'>
                Check your browser tab title!{}
            </p>
            <button
                onClick={() => setCount((c) => c + 1)}
                className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
            >
                Increment
            </button>
        </div>
    );
};

export default UseEffect;
