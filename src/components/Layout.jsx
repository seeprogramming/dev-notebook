import { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpCircle, ArrowLeftCircle } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import ConceptsList from './ConceptsList';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

// Layout component: Provides the main layout structure for the application
const Layout = ({ children }) => {
    // State to manage the mobile menu open/close state
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    // Hook to navigate programmatically
    const navigate = useNavigate();
    // Hook to get the current location (URL) of the application
    const location = useLocation();
    // Ref for the main content area
    const mainRef = useRef(null);

    // Effect to close the mobile menu when the screen size changes
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Function to scroll to the top of the page
    const scrollToTop = () => {
        if (mainRef.current) {
            mainRef.current.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <div className='h-screen flex flex-col'>
            {/* Mobile Header */}
            <header className='sticky top-0 bg-white border-b p-4 flex items-center justify-between z-50'>
                <Link to='/'>
                    <h1 className='text_gradient text-xl font-semibold text-primary'>
                        Dev Notebook
                    </h1>
                </Link>
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className='md:hidden p-2 text-primary hover:text-secondary focus:outline-none'
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </header>

            <div className='flex flex-1 overflow-hidden'>
                {/* Sidebar - Always visible on md and up, overlay on mobile */}
                <aside
                    className={`
                        fixed md:sticky md:top-0
                        inset-y-0 left-0
                        w-64 
                        bg-white
                        transform transition-transform duration-300 ease-in-out
                        md:transform-none
                        ${
                            isMobileMenuOpen
                                ? 'translate-x-0'
                                : '-translate-x-full md:translate-x-0'
                        }
                        z-50 md:z-30
                        border-r
                        h-[calc(100vh)]
                    `}
                >
                    <div className='h-[96vh]  md:h-[92vh] flex flex-col justify-between'>
                        <div className='overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 flex-1'>
                            <nav className='p-4'>
                                <ConceptsList />
                            </nav>
                        </div>
                        {/* Footer */}
                        <div className='bg-gray-800 p-2  rounded flex justify-center'>
                            <p className=' text_gradient'>
                                Created by Sagar Shelke
                            </p>
                        </div>
                    </div>
                </aside>

                {/* Mobile Overlay */}
                {isMobileMenuOpen && (
                    <div
                        className='fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden'
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                )}

                {/* Main Content */}
                <main ref={mainRef} className='flex-1 overflow-y-auto relative'>
                    <ScrollToTop mainRef={mainRef} />
                    <div className='min-h-full p-4 pt-8 pb-16 mx-auto bg-gray-50'>
                        {/* Go Back button for concept pages */}
                        {location.pathname.startsWith('/concepts/') && (
                            <button
                                onClick={() => navigate(-1)}
                                className='card_gradient  mb-4 px-2 py-1 bg-gradient-to-r from-primary to-secondary text-white rounded hover:from-secondary hover:to-primary transition-colors duration-200 flex gap-1'
                                title='Go Back'
                            >
                                <ArrowLeftCircle /> Go Back
                            </button>
                        )}
                        {/* Render children components */}
                        {children}
                        {/* Footer */}
                        <Footer />
                    </div>
                    {/* Scroll to Top Button */}
                    <button
                        onClick={scrollToTop}
                        className='fixed bottom-4 right-4 p-3 card_gradient text-white rounded-full shadow-lg hover:bg-blue-600 focus:outline-none'
                    >
                        <ArrowUpCircle size={24} />
                    </button>
                </main>
            </div>
        </div>
    );
};

export default Layout;
