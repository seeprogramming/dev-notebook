import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { FaSearch } from 'react-icons/fa';
import { SearchX, ArrowRight } from 'lucide-react';

// Home component: Displays the homepage with a list of featured concepts and a search bar
const Home = () => {
    // State to store the list of concepts
    const [concepts, setConcepts] = useState([]);
    // State to store the current search query
    const [searchQuery, setSearchQuery] = useState('');
    // State to indicate whether the concepts are still being loaded
    const [loading, setLoading] = useState(true);
    // Hook to get the current location (URL) of the application
    const location = useLocation();

    // Effect to import all concepts when the component mounts
    useEffect(() => {
        const importAllConcepts = () => {
            // Import all .mdx files from the concepts directory
            const files = import.meta.glob('../content/concepts/*.mdx');
            // Process the imported files to extract slug and title
            const processedFiles = Object.keys(files).map((filePath) => {
                const slug = filePath.match(/\/([^/]+)\.mdx$/)[1];
                const title = slug.replace(/-/g, ' ');
                return { slug, title };
            });
            // Update the state with the processed concepts
            setConcepts(processedFiles);
            // Set loading to false as the concepts have been loaded
            setLoading(false);
        };

        importAllConcepts();
    }, []);

    // Effect to update the search query based on the URL parameters
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        setSearchQuery(params.get('search') || '');
    }, [location.search]);

    // Filter the concepts based on the search query
    const filteredConcepts = concepts.filter((concept) =>
        concept.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className='p-0  '>
            {/* Page title */}
            <h1 className='text_gradient text-4xl font-bold mb-6'>
                Welcome to Dev Notebook
            </h1>
            {/* Page description */}
            <p className='mb-6 text-black'>
                This is your personal developer notebook where you can find and
                document various programming concepts and tutorials.
            </p>
            {/* Search form */}
            <form className='mb-6'>
                <input
                    type='text'
                    placeholder='Search concepts...'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className='border border-gray-300 rounded p-2 w-full'
                />
            </form>
            {/* Section title */}
            <h2 className='text-2xl font-semibold mb-4 text-black'>
                Featured Concepts
            </h2>
            {/* Grid to display the concepts */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {/* Show skeletons while loading */}
                {loading ? (
                    [...Array(3)].map((_, index) => (
                        <div
                            key={index}
                            className='block p-6 rounded-lg shadow-lg'
                        >
                            <Skeleton height={150} />
                        </div>
                    ))
                ) : filteredConcepts.length > 0 ? (
                    // Display filtered concepts
                    filteredConcepts.slice(0, 5).map((concept) => (
                        <Link
                            key={concept.slug}
                            to={`/concepts/${concept.slug}`}
                            className='card_gradient text-white block p-6 rounded-md shadow transform transition-transform hover:scale-105 flex justify-between items-center'
                        >
                            <div className=''>
                                <h3 className='text-md font-semibold mb-2'>
                                    {concept.title}
                                </h3>
                            </div>
                            <ArrowRight
                                className='text-2xl text-white'
                                width='24'
                                height='24'
                            />
                        </Link>
                    ))
                ) : (
                    // Display message if no concepts are found
                    <div className='col-span-1 sm:col-span-2 lg:col-span-3 text-center mt-8'>
                        <SearchX
                            className='text-6xl text-gray-400 mx-auto mb-4'
                            width='64'
                            height='64'
                        />
                        <p className='text-xl font-semibold mb-4 text-black'>
                            No concepts found
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
