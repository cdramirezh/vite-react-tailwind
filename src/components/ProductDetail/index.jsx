import { XMarkIcon } from "@heroicons/react/24/solid";

const ProductDetail = () => {
	return (
		// 68px is the height of the nav
		<aside className="flex flex-col fixed bg-white right-0 border border-black rounded-lg w-[360px] h-[calc(100vh-68px)] z-10">
			<div className="flex justify-between items-center p-6">
				<h2 className="font-medium text-xl">Detail</h2>
				<button>
					<XMarkIcon className="h-6 w-6 text-black-500" />
				</button>
			</div>
		</aside>
	);
};

export { ProductDetail };
