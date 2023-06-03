import { useState, useEffect } from "react";

const useMediaQuery = () => {
	const [width, setWidth] = useState(window.innerWidth);
	const [deviceType, setDeviceType] = useState(getDeviceType(width));
	
	const handleDeviceType = () => {
		const newWidth = window.innerWidth;
		setWidth(newWidth);
		setDeviceType(getDeviceType(newWidth));
	};

	useEffect(() => {
		window.addEventListener("resize", handleDeviceType);
		return () => window.removeEventListener("resize", handleDeviceType);
  }, []);
  if (typeof window === "undefined") {
		throw new Error("it cannot be used on the server!");
	}
	return deviceType;
};


export default useMediaQuery;
//Helper function
	const getDeviceType = (width) => {
		if (width < 768) return "mobile";
		if (width >= 768 && width < 992) return "tablet";
		if (width >= 992 && width < 1200) return "laptop";
		return "desktop";
	};
