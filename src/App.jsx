import { useState } from 'react';
import Layout from './components/Layout';
import { ConceptViewer } from './components/ConceptViewer';
import UseEffectExample from './content/concepts/useEffect.mdx';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Layout>
                <div className='min-h-screen bg-gray-50'>
                    <ConceptViewer>
                        <UseEffectExample />
                    </ConceptViewer>
                </div>
            </Layout>
        </>
    );
}

export default App;
