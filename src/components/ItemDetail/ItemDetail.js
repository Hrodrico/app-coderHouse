import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiCheckCircle, FiTruck } from 'react-icons/fi';
import ItemCount from 'components/ItemCount/ItemCount';
import { CartContext } from 'context/CartContext';
import { categoryLabel } from 'mock/api';
import { formatPrice } from 'utils/Fnct';
import './ItemDetail.css';

function ItemDetail({ product }) {
    const { itemAdd, isInCart } = useContext(CartContext);
    const { id, img, name, description, price, stock, category } = product;
    const added = isInCart(id);

    return (
        <article className="detail">
            <nav className="detail-breadcrumb" aria-label="Ruta de navegación">
                <Link to="/"><FiArrowLeft aria-hidden="true" /> Inicio</Link>
                <span aria-hidden="true">/</span>
                <Link to={`/category/${category}`}>{categoryLabel(category)}</Link>
            </nav>

            <div className="detail-grid">
                <div className="detail-media">
                    <img src={img} alt={name} />
                </div>

                <div className="detail-info">
                    <p className="eyebrow">{categoryLabel(category)}</p>
                    <h1>{name}</h1>
                    <p className="detail-price">{formatPrice(price)}</p>
                    <p className="detail-description">{description}</p>

                    {added ? (
                        <div className="detail-added">
                            <p><FiCheckCircle aria-hidden="true" /> Producto agregado al carro</p>
                            <div className="detail-actions">
                                <Link to="/cart" className="btn btn-accent">Terminar mi compra</Link>
                                <Link to="/" className="btn btn-outline">Seguir comprando</Link>
                            </div>
                        </div>
                    ) : (
                        <ItemCount stock={stock} initial={1} onAdd={(qty) => itemAdd(product, qty)} />
                    )}

                    <ul className="detail-perks">
                        <li><FiCheckCircle aria-hidden="true" /> Producto original Victoria's Secret</li>
                        <li><FiTruck aria-hidden="true" /> Despacho a todo Chile</li>
                    </ul>
                </div>
            </div>
        </article>
    );
}

export default ItemDetail;
