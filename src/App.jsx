import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DetectsDevice from './Components/DetectsDevice'
import useDataFetching from "./Components/WithCustomHooks/useDataFetching";
import FetchData from './Components/FetchData';
function App() {
	return (
		<div className="min-h-screen w-[100vw] bg-[#393E46]">
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							<h1 className="text-green-500">Welcome to custom Hooks</h1>
						}
					/>
					<Route path="/useMediaQuery" element={<DetectsDevice />} />
					<Route path="/useFetch" element={<FetchData />} />
					<Route path="*" element={<p>Not Found</p>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App
