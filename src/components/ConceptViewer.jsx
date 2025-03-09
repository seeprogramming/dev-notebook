import { MDXProvider } from '@mdx-js/react';
import { MDXComponents } from './MDXComponents';

export const ConceptViewer = ({ children }) => {
    return (
        <MDXProvider components={MDXComponents}>
            <div className='prose max-w-none p-6'>{children}</div>
        </MDXProvider>
    );
};
