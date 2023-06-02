import React from "react";
import { BsPhone } from "react-icons/bs";
import { BsLaptop } from "react-icons/bs";
import { RiTabletLine } from "react-icons/ri";
import { GoDeviceDesktop } from "react-icons/go";
import useMediaQuery from "./WithCustomHooks/useMediaQuery";

const DetectsDevice = () => {
	const deviceType = useMediaQuery();
	return (
		<div className="flex flex-col items-center justify-center min-h-screen text-[#222831] w-[100%]">
			<div className="fixed top-0 left-0 right-0 p-4 text-center bg-green-200 rounded-lg shadow-lg">
				<h1 className="text-2xl">
					Currently,You😎 are using <strong className="capitalize">{deviceType}</strong>
				</h1>
			</div>
			<div className="justify-center items-center flex flex-col  w-[50%] md:mt-0 mt-[5rem] p-6 bg-gray-800 shadow-2xl rounded-xl h-[50%] ">
				<div className="mx-3 flex flex-row flex-wrap gap-4 items-center justify-around w-[100%] h-full ">
					<div
						className={`flex flex-col items-center p-8 mb-4 border-2 w-[12rem]  border-green-900 rounded-md shadow-md bg-[#00ADB5]
				   ${deviceType === "mobile" && "bg-yellow-500"}`}
					>
						<BsPhone className="mr-2 text-xl" size={53} />
						<h2 className="text-lg font-semibold">Small</h2>
					</div>
					<div
						className={`flex w-[12rem] flex-col items-center p-8 mb-4 border-2 border-green-900 rounded-md shadow-md bg-[#00ADB5]
				           ${deviceType == "tablet" && "bg-yellow-500"}`}
					>
						<RiTabletLine className="mr-2 text-xl" size={53} />
						<h2 className="text-lg font-semibold">Medium</h2>
					</div>
					<div
						className={`flex w-[12rem]  flex-col items-center p-8 mb-4 border-2 border-green-900 rounded-md shadow-md bg-[#00ADB5]
				           ${deviceType == "laptop" && "bg-yellow-500"}  `}
					>
						<BsLaptop className="mr-2 text-xl" size={53} />
						<h2 className="text-lg font-semibold">Large</h2>
					</div>
					<div
						className={`flex w-[12rem] flex-col items-center p-8 mb-4 border-2 border-green-900 rounded-md shadow-md bg-[#00ADB5]
				     ${deviceType == "desktop" && "bg-yellow-500"}`}
					>
						<GoDeviceDesktop className="mr-2 text-xl" size={53} />
						<h2 className="text-lg font-semibold">Extra Large</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DetectsDevice;
