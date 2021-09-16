import { useEffect, useState } from 'react';
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

export default useNetwork;
