import { Component } from 'react';
import { Link } from 'react-router-dom';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error('ErrorBoundary caught an error', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
                    <h1 className='text-4xl font-bold mb-4'>
                        Something went wrong
                    </h1>
                    <p className='mb-4'>{this.state.error?.message}</p>
                    <Link
                        to='/'
                        className='text-blue-600 hover:text-blue-800 underline'
                    >
                        Go back to Home
                    </Link>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
