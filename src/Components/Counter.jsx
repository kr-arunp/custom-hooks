import { useState } from "react";
import "./main.css";
const Counter = () => {
	const [count, setCount] = useState(0);
	const handleIncrement = () => {
		setCount(count + 1);
	};
	const handleDecrement = () => {
		setCount(count - 1);
	};
	return (
		<>
			<button onClick={handleIncrement} className="btn">
				Increment
			</button>
			<h2 className="text-2xl text-slate-50">Count: {count}</h2>
			<button onClick={handleDecrement} className="btn">
				Decrement
			</button>
		</>
	);
};

export default Counter;
