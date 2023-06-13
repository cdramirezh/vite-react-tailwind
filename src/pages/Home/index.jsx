import { useEffect, useState } from "react";
import { Card } from "../../components/Navbar/Card";
import { URL } from "../../API";
import "./home.css";

function Home() {
	const [items, setItems] = useState([]);

	useEffect(() => {
		if (!items.length) {
			fetch(URL)
				.then((res) => res.json())
				.then((data) => setItems(data))
				.catch(console.error);
		}
	}, [items]);

	return (
		<>
		Home
			<div className="grid gap-4 place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-lg">
				{items.map((item) => (
					<Card key={item.id} {...item} />
				))}
			</div>
		</>
	);
}

export { Home };
