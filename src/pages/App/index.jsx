import { useRoutes, BrowserRouter } from "react-router-dom";
import { MyAccount } from "../MyAccount";
import { MyOrder } from "../MyOrder";
import { MyOrders } from "../MyOrders";
import { Home } from "../Home";
import { Layout } from "../../components/Navbar/Layout";
import { Navbar } from "../../components/Navbar";
import { NotFound } from "../NotFound";
import { SingIn } from "../SingIn";
import "./App.css";

const AppRoutes = () => {
	let routes = useRoutes([
		{ path: "/", element: <Home /> },
		{ path: "/my-account", element: <MyAccount /> },
		{ path: "/my-order", element: <MyOrder /> },
		{ path: "/my-orders", element: <MyOrders /> },
		{ path: "/sing-in", element: <SingIn /> },
		{ path: "/*", element: <NotFound /> },
	]);
	return routes;
};

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Layout>
					<AppRoutes />
				</Layout>
			</BrowserRouter>
		</>
	);
};

export default App;
