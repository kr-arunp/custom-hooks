import { useState, useEffect } from "react";
import { useDebounce } from "./useDebounce";

const useDataFetching = (url) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError]=useState(null);
	const debouncedValue=useDebounce(url,1000)
	
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response=await fetch(debouncedValue)
				const json = await response.json();
				setData(json);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, [debouncedValue]);

	return { data, loading, error };
};

export default useDataFetching;
