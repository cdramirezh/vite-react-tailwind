import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {
	const [count, setCount] = useState(0);
	const onAddCount = () => {setCount(count + 1)}
	return (
		<ShoppingCartContext.Provider value={{ count, setCount, onAddCount }}>
			{children};
		</ShoppingCartContext.Provider>
	);
};
