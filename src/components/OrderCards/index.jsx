import { XMarkIcon } from "@heroicons/react/24/solid";
const OrderCards = ({ order: { date, totalItems, totalPrice } }) => {
	return (
		<div className="flex justify-between items-center mb-3 border-black">
			<p>
				<span>{date.toString()}</span>
				<span>{totalItems}</span>
				<span>{totalPrice}</span>
			</p>
		</div>
	);
};
export { OrderCards };
