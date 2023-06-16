import { useContext } from "react";
import { Link } from "react-router-dom";
import { OrderCards } from "../../components/OrderCards";
import { ShoppingCartContext } from "../../Context";
function MyOrders() {
	const { orders } = useContext(ShoppingCartContext);
	return (
		<>
			<div className="relative flex justify-center w-80">
				<h1>My Order</h1>
			</div>
			{orders.map((order, i) => (
				<Link to={`my-orders/${order.id}`} key={i}>
					<OrderCards order={order} />
				</Link>
			))}
		</>
	);
}

export { MyOrders };
