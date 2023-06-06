import { useRef } from "react";
import { FaSearch } from "react-icons/fa";

function RefExample() {
	const inputRef = useRef(null);

	function handleClick() {
		inputRef.current.style.color = "red";
		inputRef.current.focus();
	}

	return (
		<div className="flex items-center justify-center space-x-2">
			<input
				type="text"
				ref={inputRef}
				className="px-4 py-2 mt-12 border border-gray-300 rounded-lg"
				placeholder="Search..."
			/>
			<button
				onClick={handleClick}
				className="px-4 py-2 mt-12 text-white bg-blue-500 rounded-lg "
			>
				<FaSearch />
			</button>
		</div>
	);
}

export default RefExample;
