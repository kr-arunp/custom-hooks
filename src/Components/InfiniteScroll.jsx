import React, { useEffect, useState } from "react";
import { useThrottle } from "./hooks/useThrottle";
const InfiniteScroll = () => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [page, setPage]=useState(1);

	const fetchData = async () => {
		setIsLoading(true);
		try {
			const response = await fetch(
				`https://jsonplaceholder.typicode.com/posts?_page=${page}`
			);
			const newData = await response.json();
			setData((prevData) => [...prevData, ...newData]);
			setPage((prevPage) => prevPage + 1);
		} catch (error) {
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	};

	const handleScroll = () => {
		const scrollTop = document.documentElement.scrollTop;
		const windowHeight = window.innerHeight;
		const documentHeight = document.documentElement.offsetHeight;

		if (!isLoading && scrollTop + windowHeight >= documentHeight) {
			fetchData();
		}
	};

	const throttledHandleScroll=useThrottle(handleScroll, 500);
	

	useEffect(() => {
		window.addEventListener("scroll", throttledHandleScroll);
		return () => {
			window.removeEventListener("scroll", throttledHandleScroll);
		};
	}, [throttledHandleScroll]);

let lastId = 0;

function generateUniqueId() {
	lastId += 1;
	return lastId;
}

	return (
		<div className="overflow-hidden">
			<div className="px-4 mx-auto ">
				<h1 className="fixed z-50 w-[16rem] mt-8  py-4 text-center shadow-md mb-4 text-4xl font-bold text-gray-200 hover:bg-orange-300 bg-gray-800">
					Latest Posts
				</h1>
				<div className="sticky grid w-full grid-cols-1 gap-4 p-3 md:grid-cols-2 lg:grid-cols-4">
					{data.map((post) => (
						<div
							key={generateUniqueId()}
							className="overflow-hidden bg-white rounded-lg shadow-lg"
						>
							<div className="px-6 py-4">
								<h2 className="mb-2 text-xl font-bold text-gray-800">
									{post.title}
								</h2>
								<img src={post.url} alt="no" />
								<p className="text-base text-gray-600">{post.body}</p>
							</div>
							<div className="px-6 py-4 bg-gray-100">
								<a
									href="#"
									className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-white rounded-full bg-amber-400"
								>
									#{post.id}
								</a>
								<a
									href="#"
									className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold bg-gray-200 rounded-full"
								>
									Placeholder
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
			{isLoading && <p>Loading...</p>}
		</div>
	);
};

export default InfiniteScroll;
