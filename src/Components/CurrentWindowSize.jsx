import React from 'react'
import { useWindowSize } from './WithCustomHooks/useWindowSize';

const CurrentWindowSize=() => {
  const { width, height } = useWindowSize();
  return (
		<div className="flex flex-col items-center justify-center min-h-screen text-[#222831] w-[100%]">
			<div className="fixed top-0 left-0 right-0 p-4 text-center bg-green-200 rounded-lg shadow-lg">
				<h1 className="text-2xl">
					Currently,Your😎 Window Size is{" "}
          <strong className="capitalize">{width}*{height}</strong>
				</h1>
			</div>
		</div>
	);
}

export default CurrentWindowSize
