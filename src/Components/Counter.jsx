import { useState } from "react";
import "./main.css";
{/*
While it is not strictly necessary to begin a custom Hook name with the word "use,"
doing so is a convention that is widely followed in the React community. 
This convention makes it clear to other developers that
  the function is intended to be used as a Hook,
   and that it follows the rules and conventions that come with using Hooks in React.
One of the benefits of following 
this convention is that it allows React to automatically 
check for violations of the Hooks rules. When you use a Hook in a component, 
React checks to make sure that it is only called from the top level of the component,
and that it is never called conditionally
If you don't follow the naming convention of starting your custom Hook names 
with "use," React may not be able to automatically detect 
that a function is intended to be used as a Hook, 
 and it may not be able to catch violations of these rules.
So while it's not strictly necessary to follow this convention,
 doing so can make it simpler for other developers to understand 
 your code, and it can help ensure that your Hooks are used correctly 
 and safely within your React components.
*/}
import MyCounter from "./hooks/useCounter";
const Counter = () => {
	// const [count, setCount] = useState(0);
	const step=3;
	const { count, increment, decrement }=MyCounter(10, 3)
	return (
		<>
			<button onClick={increment} className="btn">
				Increment {step}
			</button>
			<h2 className="text-2xl text-slate-50">Count: {count}</h2>
			<button onClick={decrement} className="btn">
				Decrement {step}
			</button>
		</>
	);
};

export default Counter;
