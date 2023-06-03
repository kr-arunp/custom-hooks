/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";

export const defaultUserConfig = {
	theme: "light", // Values can be: "light", "dark","System"
	lang: "en", // Possible values: "en", "es", "fr",'hindi' ,'gujarati' etc.
	settings: {
		pushNotifications: true,
		emailNotifications: false,
		soundEffects: true,
		autoSave: true,
		autoPlay: false,
		showTips: true,
	},
	timezone: "IST", // Values: "IST", "UTC", "America/New_York", "Asia/Tokyo", etc.
	currency: "USD", // Values:"INR", "USD", "EUR", "GBP", "JPY", etc.
	// Could be added more based on the requirements
};

const LocalStorage = () => {
	const [config, setConfig] = useLocalStorage("userConfig", defaultUserConfig);

	const [showSettings, setShowSettings] = useState(false);

	const handleToggleSettings = () => {
		setShowSettings(!showSettings);
	};
	const handleSaveSettings= () => {
		setConfig(config);
		setShowSettings(!showSettings);
	};

	const handleSettingsChange = (event) => {
		const { name, type } = event.target;
		const value =
			type === "checkbox" ? event.target.checked : event.target.value;

		setConfig((prevConfig) => ({
			...prevConfig,
			settings: {
				...prevConfig.settings,
				[name]: value,
			},
		}));
		console.log(defaultUserConfig);
	};

	return (
		<div className="flex items-start justify-center">
			<button
				className="px-4 py-2 mt-[31rem] font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
				onClick={handleToggleSettings}
			>
				Settings
			</button>
			{showSettings && (
				<div className="fixed top-0 right-0 w-screen h-screen bg-gray-800 bg-opacity-50">
					<div className="max-w-md p-6 mx-auto mt-12 bg-white rounded-lg shadow-lg">
						<h1 className="mb-4 text-2xl font-bold">Settings</h1>
						<div className="mb-4">
							<label
								className="inline-block mb-2 font-bold"
								htmlFor="pushNotifications"
							>
								Push Notifications
							</label>
							<input
								className="ml-2 leading-tight"
								type="checkbox"
								id="pushNotifications"
								name="pushNotifications"
								checked={config.settings.pushNotifications}
								onChange={handleSettingsChange}
							/>
						</div>
						<div className="mb-4">
							<label
								className="inline-block mb-2 font-bold"
								htmlFor="emailNotifications"
							>
								Email Notifications
							</label>
							<input
								className="ml-2 leading-tight"
								type="checkbox"
								id="emailNotifications"
								name="emailNotifications"
								checked={config.settings.emailNotifications}
								onChange={handleSettingsChange}
							/>
						</div>
						<div className="mb-4">
							<label
								className="inline-block mb-2 font-bold"
								htmlFor="soundEffects"
							>
								Sound Effects
							</label>
							<input
								className="ml-2 leading-tight"
								type="checkbox"
								id="soundEffects"
								name="soundEffects"
								checked={config.settings.soundEffects}
								onChange={handleSettingsChange}
							/>
						</div>
						<div className="mb-4">
							<label className="inline-block mb-2 font-bold" htmlFor="autoSave">
								Auto Save
							</label>
							<input
								className="ml-2 leading-tight"
								type="checkbox"
								id="autoSave"
								name="autoSave"
								checked={config.settings.autoSave}
								onChange={handleSettingsChange}
							/>
						</div>
						<div className="mb-4">
							<label className="inline-block mb-2 font-bold" htmlFor="autoPlay">
								Auto Play Videos
							</label>
							<input
								className="ml-2 leading-tight"
								type="checkbox"
								id="autoPlay"
								name="autoPlay"
								checked={config.settings.autoPlay}
								onChange={handleSettingsChange}
							/>
						</div>
						<div className="mb-4">
							<label className="inline-block mb-2 font-bold" htmlFor="showTips">
								Show Tips
							</label>
							<input
								className="ml-2 leading-tight"
								type="checkbox"
								id="showTips"
								name="showTips"
								checked={config.settings.showTips}
								onChange={handleSettingsChange}
							/>
						</div>
						<button
							className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
							onClick={handleSaveSettings}
						>
							Save
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default LocalStorage;
