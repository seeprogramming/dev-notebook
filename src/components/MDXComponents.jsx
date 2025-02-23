// src/components/MDXComponents.jsx
import React from 'react';
import CodeDemo from './CodeDemo';

export const MDXComponents = {
    h1: (props) => <h1 className='text-4xl font-bold mb-4' {...props} />,
    h2: (props) => <h2 className='text-2xl font-semibold mb-3' {...props} />,
    p: (props) => <p className='mb-4 leading-relaxed' {...props} />,
    pre: (props) => (
        <pre
            className='bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4'
            {...props}
        />
    ),
    code: (props) => <code className='bg-gray-100 px-1 rounded' {...props} />,
    CodeDemo: CodeDemo,
};
