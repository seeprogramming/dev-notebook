import { Link, useParams } from 'react-router-dom';
import { lazy, Suspense, useEffect, useState } from 'react';
import { ConceptViewer } from './ConceptViewer';
import ScrollToTop from './ScrollToTop';
import {
    CircleLoader,
    ClipLoader,
    PuffLoader,
    RingLoader,
} from 'react-spinners';

const DynamicConceptPage = () => {
    const { slug } = useParams();

    const [Content, setContent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadContent() {
            setLoading(true);
            try {
                const files = import.meta.glob('../content/concepts/*.mdx');
                const filePath = `../content/concepts/${slug}.mdx`;
                if (files[filePath]) {
                    // await new Promise((resolve) => setTimeout(resolve, 200000));
                    const module = await files[filePath]();
                    setContent(() => module.default);
                    setError(null);
                } else {
                    setError('Concept not found');
                }
            } catch (err) {
                console.error('Failed to load concept:', err);
                setError('Failed to load concept');
            } finally {
                setLoading(false);
            }
        }

        loadContent();
    }, [slug]);

    if (loading)
        return (
            <div className='flex flex-col items-center justify-center h-[70vh]'>
                <PuffLoader size={50} color={'#123abc'} loading={loading} />
                {/* <p className='mt-4 text-lg'>Loading...</p> */}
            </div>
        );
    if (error)
        return (
            <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
                <h1 className='text-4xl font-bold mb-4'>{error}</h1>
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
    if (!Content) return <div>Concept not found</div>;

    return (
        <Suspense
            fallback={
                <div className='card_gradient flex flex-col items-center justify-center min-h-screen bg-gray-100'>
                    <PuffLoader size={50} color={'#ffffff'} loading={true} />
                    <p className='mt-4 text-lg'>Loading...</p>
                </div>
            }
        >
            <div className='bg-white rounded shadow-md'>
                <ConceptViewer>
                    <Content />
                </ConceptViewer>
            </div>
        </Suspense>
    );
};

export default DynamicConceptPage;
