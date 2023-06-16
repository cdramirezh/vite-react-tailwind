import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { OrderCard } from "../../components/OrderCard";
import { ShoppingCartContext } from "../../Context";
import { NotFound } from "../NotFound";

function MyOrder() {
	const { orders } = useContext(ShoppingCartContext);
	const { id } = useParams()
	let cart = []
	if (id === 'last') {
		cart = orders.at(-1)?.cart || []
	} else if (Number.isInteger(Number(id))) {
		cart = orders?.[id]?.cart || []
	} else {
		return (<NotFound />)
	}
	return (
		<>
			<div className="relative flex items-center justify-center w-80 mb-6">
				<Link to='/my-orders' className="absolute left-0">
					<ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer" />
				</Link>
				<h1>My Order</h1>
			</div>
			<div className="flex flex-col w-80">
				{cart.map((item) => (
					<OrderCard key={item.id} item={{ ...item }} />
				))}
			</div>
		</>
	);
}

export { MyOrder };
