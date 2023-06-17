import { useEffect, useState } from "react";

export const useIsUserOnline=() => {
	const [isOnline, setIsOnline] = useState(true);
	useEffect(() => {
		const handleOnlineState=() => {
			setIsOnline(true);
		}
		const handleOfflineState=() => {
			setIsOnline(false);
		}
		// listens the events
		window.addEventListener('online', handleOnlineState);
		window.addEventListener("offline", handleOfflineState);
		//Cleanup the event listeners after using it
		() =>{
			 window.removeEventListener('online', handleOnlineState)
			 window.removeEventListener("online", handleOnlineState);
		}
	}, [])
	return isOnline;
}
