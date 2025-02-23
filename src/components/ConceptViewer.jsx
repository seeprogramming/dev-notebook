// src/components/ConceptViewer.jsx
import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { MDXComponents } from './MDXComponents';

export const ConceptViewer = ({ children }) => {
    return (
        <MDXProvider components={MDXComponents}>
            <div className='py-8 px-4'>{children}</div>
        </MDXProvider>
    );
};
