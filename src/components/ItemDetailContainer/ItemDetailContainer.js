import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactLoading from 'react-loading';
import ItemDetail from 'components/ItemDetail/ItemDetail';
import ErrorView from 'views/ErrorView';
import { getProductById } from 'mock/api';

function ItemDetailContainer() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        setProduct(null);
        setError(false);
        getProductById(id).then((prod) => (prod ? setProduct(prod) : setError(true)));
    }, [id]);

    if (error) return <ErrorView />;
    if (!product) return <div className="page-loading"><ReactLoading type="spinningBubbles" color="var(--accent)" /></div>;
    return <ItemDetail product={product} />;
}

export default ItemDetailContainer;
