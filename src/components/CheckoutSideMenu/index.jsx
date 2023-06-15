import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { OrderCard } from "../OrderCard";
import { ShoppingCartContext } from "../../Context";

const CheckoutSideMenu = () => {
	const { closeCheckoutSide, cart, totalPrice } =
		useContext(ShoppingCartContext);

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
			<div className="px-6">
				<p className="flex justify-between items-center">
					<span className="font-light">Total:</span>
					<span className="font-medium text-2xl">{totalPrice}</span>
				</p>
			</div>
			<div className="px-6 overflow-auto">
				{cart.map((item) => (
					<OrderCard key={item.id} item={{ ...item }} />
				))}
			</div>
		</aside>
	);
};

export { CheckoutSideMenu };
