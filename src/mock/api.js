// API mock local: reemplaza Firestore. Productos en memoria, órdenes en localStorage.
import antibacterial from 'assets/images/products/p_antibacterial_hand_spray.jpeg';
import banano from 'assets/images/products/p_banano.jpeg';
import billetera from 'assets/images/products/p_billetera.jpeg';
import bolsos from 'assets/images/products/p_bolsos.jpeg';
import honeyMask from 'assets/images/products/p_honey_mask.jpeg';
import locion from 'assets/images/products/p_locion_corporal_236.jpeg';
import mantaPolar from 'assets/images/products/p_manta_polar.jpeg';
import rosewater from 'assets/images/products/p_rosewater_scrub.jpeg';
import sunsetSorbet from 'assets/images/products/p_sunset_sorbet.jpeg';

export const categories = [
    { id: 'accesorios', label: 'Bolsos y Accesorios' },
    { id: 'lociones', label: 'Cuidado Corporal' },
    { id: 'belleza', label: 'Belleza y Hogar' },
];

export const categoryLabel = (id) => (categories.find((c) => c.id === id) || {}).label || id;

const products = [
    { id: 'p01', category: 'accesorios', name: 'Banano', img: banano, price: 24990, stock: 8, description: 'Banano Victoria\'s Secret con cierre y correa ajustable, ideal para llevar lo esencial.' },
    { id: 'p02', category: 'accesorios', name: 'Billetera', img: billetera, price: 29990, stock: 6, description: 'Billetera Victoria\'s Secret con compartimentos para tarjetas, billetes y monedas.' },
    { id: 'p03', category: 'accesorios', name: 'Bolso', img: bolsos, price: 44990, stock: 4, description: 'Bolso tote Victoria\'s Secret amplio y resistente, perfecto para el día a día.' },
    { id: 'p04', category: 'lociones', name: 'Spray Antibacterial de Manos', img: antibacterial, price: 6990, stock: 20, description: 'Spray antibacterial para manos con fragancia Victoria\'s Secret, formato de bolsillo.' },
    { id: 'p05', category: 'lociones', name: 'Loción Corporal 236 ml', img: locion, price: 14990, stock: 15, description: 'Loción corporal hidratante Victoria\'s Secret de 236 ml con fragancia de larga duración.' },
    { id: 'p06', category: 'lociones', name: 'Rosewater Scrub', img: rosewater, price: 17990, stock: 10, description: 'Exfoliante corporal con agua de rosas que suaviza e ilumina la piel.' },
    { id: 'p07', category: 'lociones', name: 'Sunset Sorbet', img: sunsetSorbet, price: 15990, stock: 12, description: 'Bruma corporal Sunset Sorbet con notas frutales y frescas.' },
    { id: 'p08', category: 'belleza', name: 'Honey Mask', img: honeyMask, price: 12990, stock: 9, description: 'Mascarilla de miel nutritiva para una piel suave y radiante.' },
    { id: 'p09', category: 'belleza', name: 'Manta Polar', img: mantaPolar, price: 34990, stock: 5, description: 'Manta polar Victoria\'s Secret extra suave, ideal para los días fríos.' },
];

const delay = (data) => new Promise((resolve) => setTimeout(() => resolve(data), 400));

export const getProducts = ({ categoryId, search } = {}) => {
    const term = (search || '').toLowerCase();
    return delay(products.filter((p) =>
        (!categoryId || p.category === categoryId) &&
        (!term || p.name.toLowerCase().includes(term))
    ));
};

export const getProductById = (id) => delay(products.find((p) => p.id === id));

// Guarda una orden en localStorage y devuelve su id (como addDoc de Firestore).
export const addOrder = (collectionName, data) => {
    const orders = JSON.parse(localStorage.getItem(collectionName) || '{}');
    const id = Date.now().toString(36).toUpperCase();
    orders[id] = data;
    localStorage.setItem(collectionName, JSON.stringify(orders));
    return delay(id);
};

export const getOrderById = (collectionName, id) => {
    const orders = JSON.parse(localStorage.getItem(collectionName) || '{}');
    return delay(orders[id] ? { ...orders[id], id } : undefined);
};
