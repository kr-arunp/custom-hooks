import { useState, useEffect } from "react";

export function useThrottle(func, interval) {
	const [lastTime, setLastTime] = useState(0);

	const throttledFunc = () => {
		const now = Date.now();
		if (now - lastTime > interval) {
			func();
			setLastTime(now);
		}
	};

	useEffect(() => {
		const timer = setInterval(throttledFunc, interval);
		return () => clearInterval(timer);
	}, [interval]);

	return throttledFunc;
}
