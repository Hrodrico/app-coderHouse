import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactLoading from 'react-loading';
import { FiSearch, FiX } from 'react-icons/fi';
import ItemList from 'components/ItemList/ItemList';
import { getProducts, categories, categoryLabel } from 'mock/api';
import './ItemListContainer.css';

function ItemListContainer({ categoryId, greeting }) {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [done, setDone] = useState(false);

    useEffect(() => {
        let active = true;
        getProducts({ categoryId, search }).then((docs) => {
            if (!active) return;
            setProducts(docs);
            setDone(true);
        });
        return () => { active = false; };
    }, [categoryId, search]);

    const title = categoryId ? categoryLabel(categoryId) : 'Nuestra colección';

    return (
        <>
            {categoryId ? (
                <section className="catalog-heading">
                    <p className="eyebrow">Categoría</p>
                    <h1>{title}</h1>
                </section>
            ) : (
                <section className="hero">
                    <div className="hero-content">
                        <p className="eyebrow">Directo desde Miami</p>
                        <h1>{greeting || 'La magia de Victoria\'s Secret, en Chile'}</h1>
                        <p className="hero-text">Fragancias, cuidado corporal y accesorios originales, seleccionados uno a uno para ti.</p>
                        <div className="hero-chips">
                            {categories.map((c) => (
                                <Link key={c.id} to={`/category/${c.id}`} className="btn btn-outline">{c.label}</Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <section aria-label={title}>
                <div className="catalog-toolbar">
                    {!categoryId && <h2>{title}</h2>}
                    <label className="search-field">
                        <FiSearch aria-hidden="true" />
                        <input
                            type="search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Buscar productos…"
                            aria-label="Buscar productos"
                        />
                        {search && (
                            <button type="button" onClick={() => setSearch('')} aria-label="Limpiar búsqueda"><FiX /></button>
                        )}
                    </label>
                </div>

                {!done ? (
                    <div className="page-loading"><ReactLoading type="spinningBubbles" color="var(--accent)" /></div>
                ) : (
                    <>
                        <p className="catalog-count text-muted" aria-live="polite">
                            {products.length} {products.length === 1 ? 'producto' : 'productos'}
                        </p>
                        <ItemList products={products} />
                    </>
                )}
            </section>
        </>
    );
}

export default ItemListContainer;
