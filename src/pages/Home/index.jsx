import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { NotFound } from "../NotFound";
import { Card } from "../../components/Card";
import { ProductDetail } from "../../components/ProductDetail";
import { ShoppingCartContext } from "../../Context";

function Home() {
	const { category } = useParams();
	const { items } = useContext(ShoppingCartContext);

	const categoryFiltersMap = [
		{ route: "clothes", category: "women's clothing" },
		{ route: "electronics", category: "electronics" },
		{ route: "furniture", category: "jewelery" },
		{ route: "toys", category: "men's clothing" },
		{ route: "others", category: "electronics" },
	];

	let itemsFilteredByCat = [];

	if (categoryFiltersMap.some((e) => e.route === category)) {
		itemsFilteredByCat = items.filter((item) => item.category === categoryFiltersMap.find(e => e.route === category).category);
	} else if (category === undefined) {
		itemsFilteredByCat = items;
	} else {
		return <NotFound />;
	}

	const [searchValue, setSearchValue] = useState("");
	const filteredItems = !!searchValue.length
		? itemsFilteredByCat.filter((item) =>
				item.title
					.toString()
					.toLowerCase()
					.includes(searchValue.toString().toLowerCase())
		  )
		: itemsFilteredByCat;

	return (
		<>
			<ProductDetail />
			<div className="relative flex justify-center w-80 mb-4">
				<h1 className="font-medium text-xl">Appealing Title</h1>
			</div>
			<input
				className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
				type="text"
				placeholder="Search a product"
				onChange={(e) => setSearchValue(e.target.value)}
			/>
			<div className="grid gap-4 place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-lg">
				{filteredItems.map((item) => (
					<Card key={item.id} item={item} />
				))}
			</div>
			{!filteredItems.length && (
				<p className="text-center">No tenemos esa vaina :(</p>
			)}
		</>
	);
}

export { Home };
