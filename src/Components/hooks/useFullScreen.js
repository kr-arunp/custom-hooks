import { useEffect, useState } from "react";

const useFullScreen = () => {
	const [isFullScreen, setIsFullScreen] = useState(false);

	useEffect(() => {
		const handleFullScreenChange = () => {
			setIsFullScreen(document.fullscreenElement !== null);
		};
		window.addEventListener("fullscreenchange", handleFullScreenChange);
		return () => {
			window.removeEventListener("fullscreenchange", handleFullScreenChange);
		};
	}, []);
	const toggleFullScreen = () => {
		if (!isFullScreen) {
			document.documentElement.requestFullscreen();
		} else {
			if (document.exitFullscreen) {
				document.exitFullscreen();
			}
		}
	};
	return { toggleFullScreen, isFullScreen };
};
export default useFullScreen;
