import React, { useState } from 'react'
import useDataFetching from "./WithCustomHooks/useDataFetching";
const url = `https://api.github.com/users/${input}`;
const FetchData=() => {
	const [input, setInput]=useState("");
  const { data, loading, error }=useDataFetching( url);
  {
	  loading && <h1>Loading...</h1>;
	}
	{
		error && <h1>Error Occurred...</h1>;
	}
	console.log("🚀 ~ file: FetchData.jsx:8 ~ FetchData ~ data:", data)
  return (
		<div>
			<h1>useDataFetching demo</h1>
			<div className="fixed top-0 left-0 right-0 p-4 text-center bg-green-200 rounded-lg shadow-lg">
			  <input type="text" />
			  <button onClick={(e) => {
				  setInput(e.target.value)
			  }}>Get Data</button>
		  </div>
		  
		</div>
	);
}

export default FetchData