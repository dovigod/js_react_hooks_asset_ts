import { useEffect } from 'react';

const usePageLeave = (onBefore: Function) => {
	const handle = (e: Event) => {
		console.log('leave');
		onBefore();
	};
	useEffect(() => {
		document.addEventListener('mouseleave', handle);
		return () => {
			document.removeEventListener('mouseleave', handle);
		};
	}, []);
};

export default usePageLeave;
