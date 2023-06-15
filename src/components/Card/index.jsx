import { PlusIcon, CheckIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const Card = ({ item, item: { id, title, price, category, image } }) => {
	const {
		openProductDetail,
		setDisplayedItem,
		setCart,
		cart,
		openCheckoutSide,
		closeProductDetail,
	} = useContext(ShoppingCartContext);
	const isInCart = !!cart.find((item) => item.id === id);
	const showProduct = () => {
		setDisplayedItem(item);
		openProductDetail();
	};
	const addToCart = (event) => {
		event.stopPropagation();
		if (!isInCart) {
			closeProductDetail();
			setCart([...cart, item]);
			openCheckoutSide();
		}
	};

	return (
		<div
			className="bg-white cursor-pointer w-56 h-60 rounded-lg"
			onClick={showProduct}
		>
			<figure className="relative mb-2 w-full h-4/5">
				<span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
					{category}
				</span>
				<img
					className="w-full h-full object-cover rounded-lg"
					src={image}
					alt={title}
				/>
				<button
					className={`${
						isInCart ? "bg-black" : "bg-white"
					} absolute top-0 right-0 flex justify-center items-center w-6 h-6 rounded-full m-2 p-1`}
					onClick={addToCart}
				>
					{!!isInCart && <CheckIcon className="h-6 w-6 text-white" />}
					{!isInCart && <PlusIcon className="h-6 w-6 text-black" />}
				</button>
			</figure>
			<p className="flex justify-between items-center">
				<span className="text-sm font-light truncate">{title}</span>
				<span className="text-md font-bold">{`$${price}`}</span>
			</p>
		</div>
	);
};

export { Card };
