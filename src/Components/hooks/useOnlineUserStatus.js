import { useEffect, useState } from "react";

export function useOnlineStatus(userId) {
	const [isOnline, setIsOnline] = useState(false);

	useEffect(() => {
		let isMounted = true;
		async function checkStatus() {
			try {
				const response = await fetch(
					p`https://mychat.me/users/${userId}/status`
				);
				const status = await response.json();
				if (isMounted) {
					setIsOnline(status === "online");
				}
			} catch (error) {
				console.error(error);
			}
		}

		checkStatus();

		return () => {
			isMounted = false;
		};
	}, [userId]);

	return isOnline;
}
