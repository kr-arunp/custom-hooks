import { useState, useEffect } from "react";

const useMediaQuery=() => {
	const [width, setWidth]=useState(
		typeof window!=="undefined"? window.innerWidth:0
	);
	const [deviceType, setDeviceType]=useState("");
	function getDeviceType(width) {
		if (width<768) return "mobile";
		if (width<992) return "tablet";
		if (width<1200) return "laptop";
		return "desktop";
	}
	function handleResize() {
		const newWidth=typeof window!=="undefined"? window.innerWidth:0;
		setWidth(newWidth);
		setDeviceType(getDeviceType(newWidth));
	}
	useEffect(() => {
		window.addEventListener("resize", handleResize);

		// Set the initial device type after attaching the event listener
		setDeviceType(getDeviceType(width));

		return () => window.removeEventListener("resize", handleResize);
	}, []);
	if (typeof window==="undefined") {
		throw new Error("useMediaQuery cannot be used on the server!");
	}

	return deviceType;
};

export default useMediaQuery;
