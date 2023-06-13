import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const ProductDetail = () => {
	const { isProductDetailOpen, closeProductDetail, displayedItem } =
		useContext(ShoppingCartContext);
	let { image, title, price, description } = { ...displayedItem };

	return (
		// 68px is the height of the nav
		<aside
			className={`${
				isProductDetailOpen ? "flex" : "hidden"
			} flex-col fixed bg-white right-0 border border-black rounded-lg w-[360px] h-[calc(100vh-68px)] z-10`}
		>
			<div className="flex justify-between items-center p-6">
				<h2 className="font-medium text-xl">Detail</h2>
				<button>
					<XMarkIcon
						className="h-6 w-6 text-black-500"
						onClick={closeProductDetail}
					/>
				</button>
			</div>
			<figure className="px-6">
				<img className="w-full h-full rounded-lg" src={image} alt={title} />
			</figure>
			<p className="flex flex-col p-6">
				<span className="font-medium text-2xl mb-2">{`$${price}`}</span>
				<span className="font-medium text-md">{title}</span>
				<span className="font-light text-sm">{description}</span>
			</p>
		</aside>
	);
};

export { ProductDetail };
