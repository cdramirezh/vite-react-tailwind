import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
	const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
	const [displayedItem, setDisplayedItem] = useState({});
	const [cart, setCart] = useState([]);
	const count = cart.length;
	const totalPrice =
		cart.reduce((prev, current) => prev + current.price * 100, 0) / 100;
	const [isCheckoutSideOpen, setIsCheckoutSideOpen] = useState(false);

	const openProductDetail = () => setIsProductDetailOpen(true);
	const closeProductDetail = () => setIsProductDetailOpen(false);
	const openCheckoutSide = () => setIsCheckoutSideOpen(true);
	const closeCheckoutSide = () => setIsCheckoutSideOpen(false);

	return (
		<ShoppingCartContext.Provider
			value={{
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
			}}
		>
			{children}
		</ShoppingCartContext.Provider>
	);
};
