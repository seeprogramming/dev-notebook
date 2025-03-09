import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import DynamicConceptPage from './components/DynamicConceptPage';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
    return (
        <BrowserRouter>
            <ErrorBoundary>
                <Layout>
                    <div className='min-h-screen'>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route
                                path='/concepts/:slug'
                                element={<DynamicConceptPage />}
                            />
                            <Route path='*' element={<NotFound />} />
                        </Routes>
                    </div>
                </Layout>
            </ErrorBoundary>
        </BrowserRouter>
    );
}

export default App;
