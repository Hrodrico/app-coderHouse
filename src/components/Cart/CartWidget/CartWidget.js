import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';
import { CartContext } from 'context/CartContext';
import './CartWidget.css';

// Usa <Link> (no <a href>) para no recargar la página y perder el carro.
function CartWidget() {
    const { itemCard } = useContext(CartContext);
    const quantity = itemCard.reduce((total, item) => total + item.quantity, 0);

    return (
        <Link to="/cart" className="icon-button cart-widget" aria-label={`Carro de compras, ${quantity} productos`}>
            <FiShoppingBag />
            {quantity > 0 && <span className="cart-widget-badge">{quantity}</span>}
        </Link>
    );
}

export default CartWidget;
