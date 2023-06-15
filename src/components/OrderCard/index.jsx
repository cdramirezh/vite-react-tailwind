import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const OrderCard = ({ item: { id, title, image, price }, hasCloseButton }) => {
	const { cart, setCart } = useContext(ShoppingCartContext);
	const handleDelete = () => {
		const filteredCart = cart.filter((item) => item.id != id);
		setCart(filteredCart);
	};
	return (
		<div className="flex justify-between items-center mb-3">
			<div className="flex items-center gap-2">
				<figure className="w-20 h-20">
					<img
						className="w-full h-full rounded-lg object-cover"
						src={image}
						alt={title}
					/>
				</figure>
				<p className="text-sm font-light">{title}</p>
			</div>
			<div className="flex items-center gap-2">
				<p className="text-lg font-bold">${price}</p>
				{!!hasCloseButton && <XMarkIcon className="h-6 w-6 text-black-500 cursor-pointer" onClick={handleDelete} />}
			</div>
		</div>
	);
};
export { OrderCard };
