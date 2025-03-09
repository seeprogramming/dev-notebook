import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
            <h1 className='text-4xl font-bold mb-4'>404 - Page Not Found</h1>
            <p className='mb-4'>
                Sorry, the page you are looking for does not exist.
            </p>
            <Link
                to='/'
                className='text-blue-600 hover:text-blue-800 underline'
            >
                Go back to Home
            </Link>
        </div>
    );
};

export default NotFound;
