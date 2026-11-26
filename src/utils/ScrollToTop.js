import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// En una SPA el navegador no vuelve arriba al cambiar de ruta; esto lo hace.
export default function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
    return null;
}
