import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'App.css';

import Header from 'components/Header/Header';
import ItemDetailContainer from 'components/ItemDetailContainer/ItemDetailContainer';
import Footer from 'components/Footer/Footer';
import ScrollToTop from 'utils/ScrollToTop';

import HomeView from 'views/HomeView';
import CategoryView from 'views/CategoryView';
import ErrorView from 'views/ErrorView';
import CartView from 'views/CartView';

import logo from './assets/images/logos/magia_di_victoria.png';
import CartProvider from 'context/CartContext';

function App() {
	return (
		<CartProvider>
			<Router>
				<ScrollToTop />
				<div className="App">
					<Header logo={logo} />
					<main className="App-body container">
						<Routes>
							<Route path='/' element={<HomeView />} />
							<Route path='/category/:categoryId' element={<CategoryView />} />
							<Route path='/item/:id' element={<ItemDetailContainer />} />
							<Route path='/cart' element={<CartView />} />
							<Route path="*" element={<ErrorView />} />
						</Routes>
					</main>
					<Footer />
				</div>
			</Router>
		</CartProvider>
	);
}

export default App;
