import React, { useEffect, useState } from "react";
import { useDebounce } from "./hooks/useDebounce";
import { data } from "../assets/dummyData";

export function Search() {
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredData, setFilteredData]=useState([data]);
	const debouncedSearchTerm = useDebounce(searchTerm, 1000);

	const handleChange = (event) => {
		setSearchTerm(event.target.value);
	};
	useEffect(()=>{
	setFilteredData(data.filter((user) => {
		const values = Object.values(user).map((value) =>
			typeof value === "string" ? value.toLowerCase() : value
		);
		return values.some((value) =>
			typeof value === "string"
				? value.includes(debouncedSearchTerm.toLowerCase())
				: false
		);
	}))
	},[debouncedSearchTerm])


	return (
		<>
			<div className="flex items-center justify-center mb-4">
				<input
					className="px-4 py-2 mr-2 border border-gray-300 rounded-md mt-9"
					type="text"
					value={searchTerm}
					onChange={handleChange}
					placeholder="Search"
				/>
				<button
					className="px-4 py-2 font-bold text-white bg-blue-500 rounded mt-9 hover:bg-blue-700"
					// onClick={handleSearch}
				>
					Search
				</button>
			</div>
			<h1 className="px-4 mb-4 text-2xl font-bold text-green-700">
				User Information
			</h1>
			<div className="flex flex-row flex-wrap w-full px-3 gap-7">
				{filteredData.length > 0 ? (
					filteredData.map((user) => (
						<div
							key={user.id}
							className="p-4 bg-gray-100 rounded shadow w-[22rem]"
						>
							<p>
								<span className="font-semibold">ID:</span> {user.id}
							</p>
							<p>
								<span className="font-semibold">First Name:</span>{" "}
								{user.first_name}
							</p>
							<p>
								<span className="font-semibold">Last Name:</span>{" "}
								{user.last_name}
							</p>
							<p>
								<span className="font-semibold">Email:</span> {user.email}
							</p>
							<p>
								<span className="font-semibold">Gender:</span> {user.gender}
							</p>
							<p>
								<span className="font-semibold">IP Address:</span>{" "}
								{user.ip_address}
							</p>
						</div>
					))
				) : (
					<h1>No result Found</h1>
				)}
			</div>
		</>
	);
}
