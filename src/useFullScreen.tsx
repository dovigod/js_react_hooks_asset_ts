import { useRef } from 'react';
const useFullScreen = () => {
	const element = useRef<HTMLImageElement>(null);
	const openFullScreen = () => {
		if (element.current) {
			element.current.requestFullscreen();
		}
	};
	const exitFullScreen = () => {
		document.exitFullscreen();
	};
	return { element, openFullScreen, exitFullScreen };
};

export default useFullScreen;
