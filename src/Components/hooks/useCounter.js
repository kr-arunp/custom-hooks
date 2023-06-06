import { useState } from "react";

const useCounter = (initialValue = 0, step = 1) => {
	const [count, setCount]=useState(initialValue);
	if (step===10) { 
		const [value, setValue]=useState(0);
		console.log(value);
		setCount(value);
	}
	const increment = () => {
		setCount(count + step);
	};
	const decrement = () => {
		setCount(count - step);
	};

	return { count, increment, decrement };
};

export default useCounter;
