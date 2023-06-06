import { useEffect, useState } from "react";

export const useIsUserOnline=() => {
	const [isOnline, setIsOnline] = useState(navigator.onLine);

	useEffect(() => {
		const handleOnlineState=() => {
			setIsOnline(true);
		}
		const handleOfflineState=() => {
			setIsOnline(false);
		}
		//let's listens the event
		window.addEventListener('online', handleOnlineState);
		window.addEventListener("offline", handleOfflineState);
		//Cleanup the event listeners after using 
		() =>{
			 window.removeEventListener('online', handleOnlineState)
			 window.removeEventListener("online", handleOnlineState);
		}
	}, [])
	return isOnline;
}
