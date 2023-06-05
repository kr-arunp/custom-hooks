import { useState } from "react";
import useDataFetching from "./hooks/useDataFetching";


const url = "https://api.github.com/users/";

const FetchData = () => {
	const [input, setInput] = useState("");
	const { data, loading, error } = useDataFetching(`${url}${input}`); 

	if (loading) {
		return <h1>Loading...</h1>; 
	}

	if (error) {
		return <h1>Error Occurred...</h1>; 
	}
	return (
		<div>
			<h1>useDataFetching demo</h1>
			<div className="fixed top-0 left-0 right-0 p-4 text-center bg-green-200 rounded-lg shadow-lg">
				<input
					type="text"
					value={input}
					onChange={(e) => {
						setInput(e.target.value);
					}}
				/>{" "}
				<button onClick={() => setInput("")}>Clear</button>{" "}
				<button>Get Data</button>
				{data && ( 
					<div key={data.id}>
						<p>Name:{data.name}</p>
						<p>Bio:{data.bio}</p>
						<p>Location:{data.location}</p>
						<p>public Repo:{data.public_repos} Public Repositories</p>
						<p>Followers:{data.followers} Followers</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default FetchData;
