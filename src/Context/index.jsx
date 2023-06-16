import { createContext, useEffect, useState } from "react";
import {URL } from '../API'

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		if (!items.length) {
			fetch(URL)
				.then((res) => res.json())
				.then((data) => setItems(data))
				.catch(console.error);
		}
	}, [items]);

	const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
	const [displayedItem, setDisplayedItem] = useState({});
	const [cart, setCart] = useState([]);
	const count = cart.length;
	const totalPrice =
		cart.reduce((prev, current) => prev + current.price * 100, 0) / 100;
	const [isCheckoutSideOpen, setIsCheckoutSideOpen] = useState(false);
	const [orders, setOrders] = useState([])

	const openProductDetail = () => setIsProductDetailOpen(true);
	const closeProductDetail = () => setIsProductDetailOpen(false);
	const openCheckoutSide = () => setIsCheckoutSideOpen(true);
	const closeCheckoutSide = () => setIsCheckoutSideOpen(false);

	return (
		<ShoppingCartContext.Provider
			value={{
				items,
				count,
				isProductDetailOpen,
				openProductDetail,
				closeProductDetail,
				displayedItem,
				setDisplayedItem,
				cart,
				setCart,
				isCheckoutSideOpen,
				openCheckoutSide,
				closeCheckoutSide,
				totalPrice,
				orders,
				setOrders,
			}}
		>
			{children}
		</ShoppingCartContext.Provider>
	);
};
