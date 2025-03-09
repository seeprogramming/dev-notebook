import React from 'react';

// Footer component: Displays the footer with creator information and social links
const Footer = () => {
    return (
        <footer className='bg-gray-800 text-white py-4 mt-8 rounded'>
            <div className='container mx-auto text-center'>
                <p className='mb-4 text_gradient'>Created by Sagar Shelke</p>
                <div className='flex justify-center space-x-6'>
                    <a
                        href='https://sagarshelke-77.firebaseapp.com/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='hover:text-gray-400'
                    >
                        Portfolio
                    </a>
                    <a
                        href='https://github.com/seeprogramming'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='hover:text-gray-400'
                    >
                        GitHub
                    </a>
                    <a
                        href='https://www.linkedin.com/in/sagar-shelke-39aa84103/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='hover:text-gray-400'
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
