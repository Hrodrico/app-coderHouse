import React from 'react';
import Item from 'components/Item/Item';
import './ItemList.css';

const ItemList = ({ products }) => {
    if (!products.length) {
        return (
            <div className="empty-state">
                <p className="display">No encontramos productos</p>
                <p className="text-muted">Prueba con otra búsqueda o revisa otra categoría.</p>
            </div>
        );
    }

    return (
        <div className="product-grid">
            {products.map((product) => <Item product={product} key={product.id} />)}
        </div>
    );
};

export default ItemList;
