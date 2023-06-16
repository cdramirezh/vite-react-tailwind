import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { CalendarIcon } from "@heroicons/react/24/solid";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
const OrderCards = ({ order: { date, totalItems, totalPrice } }) => {
	return (
		<div className="flex items-center mb-4 border border-black rounded-lg w-80 p-4">
			<div className="flex justify-between w-full">
				<p className="grid grid-cols-[auto_auto] gap-2">
					<CalendarIcon className="h-6 w-6 text-black" />
					<span>{`${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`}</span>
					<ShoppingBagIcon className="h-6 w-6 text-black" />
					<span>{totalItems} articles</span>
				</p>
				<p className="flex items-center gap-2">
					<span className="font-medium text-2xl">${totalPrice}</span>
					<ChevronRightIcon className="h-6 w-6 text-black cursor-pointer" />
				</p>
			</div>
		</div >
	);
};
export { OrderCards };
