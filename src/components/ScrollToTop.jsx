import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = ({ mainRef }) => {
    const { pathname } = useLocation();

    useEffect(() => {
        if (mainRef?.current) {
            mainRef?.current.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [pathname, mainRef]);

    return null;
};

export default ScrollToTop;
