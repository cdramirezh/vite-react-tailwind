import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import "./CheckoutSideMenu.css";

const CheckoutSideMenu = () => {
	const { closeCheckoutSide } = useContext(ShoppingCartContext);

	return (
		// 68px is the height of the nav
		<aside
			className="flex flex-col absolute top-full right-0 bg-white  border border-black rounded-lg w-[360px] h-[calc(100vh-100%)] z-10"
		>
			<div className="flex justify-between items-center p-6">
				<h2 className="font-medium text-xl">My Order</h2>
				<button>
					<XMarkIcon
						className="h-6 w-6 text-black-500"
						onClick={closeCheckoutSide}
					/>
				</button>
			</div>
		</aside>
	);
};

export { CheckoutSideMenu };
