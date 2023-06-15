import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { OrderCard } from "../OrderCard";
import { ShoppingCartContext } from "../../Context";

const CheckoutSideMenu = () => {
	const { closeCheckoutSide, cart, setCart, totalPrice, orders, setOrders } =
		useContext(ShoppingCartContext);

	const handleCheckout = () => {
		const newOrder = {
			date: new Date(),
			cart: cart,
			totalItems: cart.length,
			totalPrice: totalPrice,
		};
		setOrders([...orders, newOrder]);
		setCart([]);
	};

	return (
		// 68px is the height of the nav
		<aside className="flex flex-col absolute top-full right-0 bg-white  border border-black rounded-lg w-[360px] h-[calc(100vh-100%)] z-10">
			<div className="flex justify-between items-center p-6">
				<h2 className="font-medium text-xl">My Order</h2>
				<button>
					<XMarkIcon
						className="h-6 w-6 text-black-500"
						onClick={closeCheckoutSide}
					/>
				</button>
			</div>
			<div className="flex-1 px-6 overflow-auto">
				{cart.map((item) => (
					<OrderCard key={item.id} item={{ ...item }} />
				))}
			</div>
			<div className="px-6">
				<p className="flex justify-between items-center my-2">
					<span className="font-light">Total:</span>
					<span className="font-medium text-2xl">{totalPrice}</span>
				</p>
				<button
					className="w-full bg-black py-3 text-white rounded-lg mb-6"
					onClick={handleCheckout}
				>
					Checkout
				</button>
			</div>
		</aside>
	);
};

export { CheckoutSideMenu };
