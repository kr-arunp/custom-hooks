import { useState, useEffect, useRef } from "react";

const useScrollPosition = () => {
	const [scrollPosition, setScrollPosition] = useState(0);
	const lastScrollPositionRef = useRef(0);

	useEffect(() => {
		const handleScrollPosition = () => {
			const currentPosition =window.scrollY || document.documentElement.scrollTop;
			setScrollPosition(currentPosition);
		};
		document.addEventListener("scroll", handleScrollPosition);
    	return () => document.removeEventListener("scroll", handleScrollPosition);
	}, []);

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			lastScrollPositionRef.current = scrollPosition;
		}, 1000);

		return () => clearTimeout(timeoutId);
	}, [scrollPosition]);

	return [scrollPosition, lastScrollPositionRef.current];
};

export default useScrollPosition;
