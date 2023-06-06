import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DetectsDevice from './Components/DetectsDevice'
import FetchData from './Components/FetchData';
import LocalStorage from './Components/LocalStorage';
import CurrentWindowSize from './Components/CurrentWindowSize';
import Counter from './Components/Counter';
import TurnOnFullScreen from './Components/TurnOnFullScreen';
import { Search } from './Components/Search';
import RefExample from './Components/RefExample';
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
					<Route path="/useLocalStorage" element={<LocalStorage />} />
					<Route path="/useWindowsize" element={<CurrentWindowSize />} />
					<Route path="/counter" element={<Counter />} />
					<Route path="/fullscreen" element={<TurnOnFullScreen />} />
					<Route path="/debounce" element={<Search />} />
					<Route path="/ref" element={<RefExample />} />
					<Route path="*" element={<p>Not Found</p>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App
