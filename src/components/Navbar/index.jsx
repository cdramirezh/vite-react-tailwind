import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CheckoutSideMenu } from "../CheckoutSideMenu";
import { ShoppingCartContext } from "../../Context";

import "./Navbar.css";

const Navbar = () => {
	const { count, isCheckoutSideOpen } = useContext(ShoppingCartContext);

	return (
		<nav className="flex justify-between items-center sticky top-0 z-10 w-full py-5 px-8 text-sm font-light bg-white">
			<ul className="flex items-center gap-3">
				<li className="font-semibold text-lg">
					<NavLink to="/">Shopi</NavLink>
				</li>
				<li>
					<NavLink to="/clothes">Clothes</NavLink>
				</li>
				<li>
					<NavLink to="/electronics">Electronics</NavLink>
				</li>
				<li>
					<NavLink to="/furniture">Furniture</NavLink>
				</li>
				<li>
					<NavLink to="/toys">Toys</NavLink>
				</li>
				<li>
					<NavLink to="/others">Others</NavLink>
				</li>
			</ul>
			<ul className="flex items-center gap-3">
				<li className="text-black/60">correo@domain.com</li>
				<li>
					<NavLink to="/my-orders">My Orders</NavLink>
				</li>
				<li>
					<NavLink to="/my-account">My Account</NavLink>
				</li>
				<li className="flex">
					<ShoppingBagIcon className="h-6 w-6 text-black-500" />
					<sup>{count}</sup>
				</li>
			</ul>
			{isCheckoutSideOpen && <CheckoutSideMenu />}
		</nav>
	);
};

export { Navbar };
