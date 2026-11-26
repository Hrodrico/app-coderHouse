import React from 'react';
import { Link } from 'react-router-dom';
import error_404 from '../assets/images/error/error_404.png';

const ErrorView = () => (
    <section className="error-view">
        <p className="eyebrow">Error 404</p>
        <h1>No encontramos esta página</h1>
        <p className="text-muted">Puede que el enlace esté roto o que el producto ya no exista.</p>
        <img src={error_404} alt="" />
        <Link to="/" className="btn btn-accent">Volver al inicio</Link>
    </section>
);

export default ErrorView;
