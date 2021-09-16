import React, { useState, useEffect, useRef } from 'react';

import './App.css';

const useNetwork = (onChange: Function) => {
	const [status, setStatus] = useState(navigator.onLine);

	const handleChange = (e: Event) => {
		console.dir(e);
		onChange(navigator.onLine);
		setStatus(navigator.onLine);
	};

	useEffect(() => {
		window.addEventListener('online', handleChange);
		window.addEventListener('offLine', handleChange);

		return () => {
			window.removeEventListener('offLine', handleChange);
			window.removeEventListener('online', handleChange);
		};
	}, []);
	return status;
};

const App = () => {
	const handler = (state: any) => {
		console.log(state);
	};
	const online = useNetwork(handler);

	return (
		<>
			<div>Hi</div>
			<h1>{online ? 'online' : 'offline'}</h1>
		</>
	);
};

export default App;
