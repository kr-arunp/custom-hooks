import React, { useEffect } from "react";
import { useIsUserOnline } from "./hooks/useIsUserOnline";
import { MdFiberManualRecord } from "react-icons/md";
const UserProfile = () => {
	const isOnline = useIsUserOnline();
	useEffect(() => {
		if (isOnline === false) {
			alert("Ohh😮 , You'r not online");
		}
		
	}, [isOnline]);
	return (
		<div className="flex items-center justify-center text-4xl">
			<MdFiberManualRecord
				className={`text-${isOnline ? "green-500" : "gray-400"} mr-2`}
			/>
			<p className="text-purple-600">{isOnline ? "Online" : "❌Offline"}</p>
		</div>
	);
};

export default UserProfile;
