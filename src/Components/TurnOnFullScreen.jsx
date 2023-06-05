import useFullScreen from "./hooks/useFullScreen";

const TurnOnFullScreen=() => {
  const {isFullScreen, toggleFullScreen} = useFullScreen();

	const handleFullScreenChange = () => {
		toggleFullScreen();
	};

	return (
		<div className="fixed top-0 left-0 right-0 p-4 text-center bg-green-200 rounded-lg shadow-lg">
			<button className="btn" onClick={handleFullScreenChange}>
				{isFullScreen ? "Exit Fullscreen" : "Enter Fullscreen"}
			</button>
		</div>
	);
};

export default TurnOnFullScreen;
