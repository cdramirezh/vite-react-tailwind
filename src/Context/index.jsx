import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
	const [count, setCount] = useState(0);
	const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
	const [displayedItem, setDisplayedItem] = useState({});
	const [cart, setCart] = useState([])
	const [isCheckoutSideOpen, setIsCheckoutSideOpen] = useState(false);

	const openProductDetail = () => setIsProductDetailOpen(true);
	const closeProductDetail = () => setIsProductDetailOpen(false);
	const onAddCount = () => {setCount(count + 1);};
	const openCheckoutSide = () => setIsCheckoutSideOpen(true);
	const closeCheckoutSide = () => setIsCheckoutSideOpen(false);

	return (
		<ShoppingCartContext.Provider
			value={{
				count,
				setCount,
				onAddCount,
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
			}}
		>
			{children}
		</ShoppingCartContext.Provider>
	);
};
