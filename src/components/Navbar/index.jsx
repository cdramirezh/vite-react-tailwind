import { NavLink } from "react-router-dom";

import './Navbar.css'

const Navbar = () => {

	return (
		<nav className="flex justify-between items-center sticky z-1 w-full py-5 px-8 text-sm font-light">
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
				<li className="text-black/60">
					correo@domain.com
				</li>
				<li>
					<NavLink to="/my-orders">My Orders</NavLink>
				</li>
				<li>
					<NavLink to="/my-account">My Account</NavLink>
				</li>
				<li>🛒0</li>
			</ul>
		</nav>
	);
};

export { Navbar };
