import React, { useState, useEffect, useRef, EventHandler, UIEventHandler, SyntheticEvent } from 'react';
import { elementType } from 'prop-types';

import './App.css';
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
const App = () => {
	const { element, openFullScreen, exitFullScreen } = useFullScreen();
	return (
		<>
			<div>Hi</div>
			<img
				onClick={exitFullScreen}
				ref={element}
				src="https://i.picsum.photos/id/724/200/200.jpg?hmac=sUKRpiwXopeRQ36cEVnZgrG3Wd73G8iet9dfVSvmi8k"
				alt="dummy"
			></img>
			<button onClick={openFullScreen}>fullscreen</button>
		</>
	);
};

export default App;
