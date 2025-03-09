import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

// ConceptsList component: Displays a list of concepts in the sidebar
const ConceptsList = () => {
    // State to store the list of concepts
    const [concepts, setConcepts] = useState([]);

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
        };

        importAllConcepts();
    }, []);

    return (
        <nav className='space-y-2'>
            {/* Render the list of concepts */}
            {concepts.map((concept) => (
                <Link
                    key={concept.slug}
                    to={`/concepts/${concept.slug}`}
                    className='block p-2 rounded transition-all duration-300 hover:bg-gray-100 hover:text-black'
                >
                    {concept.title}
                </Link>
            ))}
        </nav>
    );
};

export default ConceptsList;
