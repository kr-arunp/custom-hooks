import { useEffect, useState } from "react";

export const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState({
		width: 0,
		height: 0,
	});

	useEffect(() => {
		const handleWindowResize = () => {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};

		handleWindowResize();
		window.addEventListener("resize",handleWindowResize);
		//below cleanup fun runs whenever useEffect dep changes ,here is not dep ,
		//so only runs first time when comp gets 
		return () => window.removeEventListener("resize", handleWindowResize);
	}, []);

	return windowSize;
};
