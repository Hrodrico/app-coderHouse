import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiCheck, FiPlus } from 'react-icons/fi';
import { CartContext } from 'context/CartContext';
import { categoryLabel } from 'mock/api';
import { formatPrice } from 'utils/Fnct';
import { Toast } from 'utils/Swal';
import './Item.css';

function Item({ product }) {
    const { itemAdd, isInCart } = useContext(CartContext);
    const { id, img, name, description, price, stock, category } = product;
    const inCart = isInCart(id);

    const handleAdd = () => {
        itemAdd(product, 1);
        Toast.fire({ icon: 'success', title: `${name} agregado al carro` });
    };

    return (
        <article className="product-card">
            <Link to={`/item/${id}`} className="product-card-media">
                <img src={img} alt={name} loading="lazy" />
                {stock <= 5 && <span className="product-card-badge">Últimas {stock}</span>}
            </Link>
            <div className="product-card-body">
                <p className="eyebrow">{categoryLabel(category)}</p>
                <h3 className="product-card-title"><Link to={`/item/${id}`}>{name}</Link></h3>
                <p className="product-card-text">{description}</p>
                <div className="product-card-footer">
                    <span className="product-card-price">{formatPrice(price)}</span>
                    <button
                        type="button"
                        className={`btn ${inCart ? 'btn-outline' : 'btn-primary'}`}
                        onClick={handleAdd}
                        disabled={inCart}
                    >
                        {inCart ? <><FiCheck /> En el carro</> : <><FiPlus /> Agregar</>}
                    </button>
                </div>
            </div>
        </article>
    );
}

export default Item;
