import { useContext } from "react";
import { OrderCard } from "../../components/OrderCard";
import { ShoppingCartContext } from "../../Context";

function MyOrder() {
	const { orders } = useContext(ShoppingCartContext);
	const cart = orders.at(-1)?.cart || [];
	return (
		<div className="flex flex-col w-80">
			<p className="text-center">My Order</p>
			{cart.map((item) => (
				<OrderCard key={item.id} item={{ ...item }} />
			))}
		</div>
	);
}

export { MyOrder };
