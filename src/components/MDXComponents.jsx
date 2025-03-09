import React from 'react';
import { Highlight, themes } from 'prism-react-renderer';
// import Highlight, { defaultProps } from 'prism-react-renderer';
// // import theme from 'prism-react-renderer/themes/dracula';
// import dracula from 'prism-react-renderer/dist/themes/dracula';
// // You can choose a different theme if you like

const CodeBlock = ({ children, className }) => {
    console.log('CCC', children, className);
    const language = className?.replace(/language-/, '') || '';
    debugger;
    return (
        <Highlight
            {...defaultProps}
            code={children}
            language={language}
            theme={themes.github}
        >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre
                    className={`${className} bg-red p-4 rounded-lg overflow-x-auto mb-4`}
                    style={style}
                >
                    {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({ line, key: i })}>
                            {line.map((token, key) => (
                                <span
                                    key={key}
                                    {...getTokenProps({ token, key })}
                                />
                            ))}
                        </div>
                    ))}
                </pre>
            )}
        </Highlight>
    );
};

export const MDXComponents = {
    h1: (props) => (
        <h1 className='text-4xl font-bold mb-6 text-gray-900' {...props} />
    ),
    h2: (props) => (
        <h2
            className='text-3xl font-semibold mb-4 text-gray-800 mt-8'
            {...props}
        />
    ),
    h3: (props) => (
        <h3
            className='text-2xl font-semibold mb-3 text-gray-800 mt-6'
            {...props}
        />
    ),
    p: (props) => (
        <p className='mb-4 leading-relaxed text-gray-700' {...props} />
    ),
    ul: (props) => <ul className='list-disc ml-6 mb-4 space-y-2' {...props} />,
    ol: (props) => (
        <ol className='list-decimal ml-6 mb-4 space-y-2' {...props} />
    ),
    li: (props) => <li className='text-gray-700' {...props} />,
    pre: CodeBlock,
    code: CodeBlock,
    a: (props) => (
        <a className='text-blue-600 hover:text-blue-800 underline' {...props} />
    ),
    blockquote: (props) => (
        <blockquote
            className='border-l-4 border-gray-200 pl-4 italic my-4 text-gray-600'
            {...props}
        />
    ),
    table: (props) => (
        <div className='overflow-x-auto mb-4'>
            <table className='min-w-full divide-y divide-gray-200' {...props} />
        </div>
    ),
    th: (props) => (
        <th
            className='px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
            {...props}
        />
    ),
    td: (props) => (
        <td
            className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'
            {...props}
        />
    ),
};
